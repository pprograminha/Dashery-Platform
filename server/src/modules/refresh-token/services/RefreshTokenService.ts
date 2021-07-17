import AppError from '../../../shared/errors/AppError'
import { isAfter, addDays, getUnixTime, addSeconds } from 'date-fns'
import { inject, injectable } from "tsyringe";
import IRefreshToken from "../domain/entities/IRefreshToken";
import IRefreshTokenRepository from "../domain/repositories/IRefreshTokenRepository";
import IUsersRepository from "../../users/domain/repositories/IUsersRepository";
import ITokenProvider from '../../users/providers/TokenProvider/models/ITokenProvider';

interface IResponse {
  refresh_token?: IRefreshToken;
  token: string
}

interface IRefreshTokenRequestDTO {
  refresh_token_id: string
}

@injectable()
export default class RefreshTokenService {
  constructor(
    @inject("RefreshTokenRepository")
    private refreshTokenRepository: IRefreshTokenRepository,

    @inject("TokenProvider")
    private tokenProvider: ITokenProvider,

    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) { }

  async execute({ refresh_token_id }: IRefreshTokenRequestDTO): Promise<IResponse> {

    const refreshToken = await this.refreshTokenRepository.findById(refresh_token_id)

    if (!refreshToken) {
      throw new AppError('The refresh token does not exist', 2)
    }


    const token = await this.tokenProvider.registerToken(refreshToken.user_id)

    if (isAfter(getUnixTime(Date.now()), refreshToken.expires_in)) {
      await this.refreshTokenRepository.destroyById(refresh_token_id)

      const newRefreshToken = await this.refreshTokenRepository.generate({
        expires_in: getUnixTime(addSeconds(Date.now(), 60)),
        user_id: refreshToken.user_id
      })

      return {
        refresh_token: newRefreshToken,
        token
      }
    }

    return {
      token
    }
  }
}