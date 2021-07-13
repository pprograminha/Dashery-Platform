import AppError from '../../../shared/errors/AppError'
import { addDays, addSeconds, getUnixTime } from 'date-fns'
import { inject, injectable } from "tsyringe";
import IRefreshToken from "../domain/entities/IRefreshToken";
import IRefreshTokenRepository from "../domain/repositories/IRefreshTokenRepository";
import IUsersRepository from "../../users/domain/repositories/IUsersRepository";

@injectable()
export default class GenerateRefreshTokenService {
  constructor(
    @inject("RefreshTokenRepository")
    private refreshTokenRepository: IRefreshTokenRepository,

    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) { }

  async execute(user_id: string): Promise<IRefreshToken> {
    const user = await this.usersRepository.findById(user_id);

    if (!user) {
      throw new AppError("The user does not exist", 3, 401);
    }

    const refreshToken = await this.refreshTokenRepository.findByUserId(user_id);

    if (refreshToken) {
      await this.refreshTokenRepository.destroyByRefreshToken(refreshToken);
    }

    const newRefreshToken = await this.refreshTokenRepository.generate({
      user_id,
      expires_in: getUnixTime(addSeconds(new Date(), 30))
    });

    return newRefreshToken
  }
}