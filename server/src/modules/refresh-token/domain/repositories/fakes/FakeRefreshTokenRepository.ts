import { getRepository, Repository } from "typeorm";
import IRefreshToken from "../../../domain/entities/IRefreshToken";
import IRefreshTokenRepository from "../../../domain/repositories/IRefreshTokenRepository";
import IGenerateRefreshTokenDTO from "../../../dtos/IGenerateRefreshTokenDTO";
import RefreshToken from "../../../infra/typeorm/entities/RefreshToken";

export default class FakeRefreshTokenRepository implements IRefreshTokenRepository {
  private refreshToken: IRefreshToken[] = [];

  async destroyByRefreshToken(refreshToken: IRefreshToken): Promise<void> {
    const findIndex = this.refreshToken.findIndex(findRefreshToken => refreshToken.user_id === findRefreshToken.user_id)

    this.refreshToken.splice(findIndex, 1);
  }

  async destroyById(refresh_token_id: string): Promise<void> {
    const findIndex = this.refreshToken.findIndex(findRefreshToken => refresh_token_id === findRefreshToken.id)

    this.refreshToken.splice(findIndex, 1);
  }

  async findById(refresh_token_id: string): Promise<IRefreshToken | undefined> {
    const refreshToken = this.refreshToken.find(findRefreshToken => refresh_token_id === findRefreshToken.id);

    return refreshToken;
  }

  async generate({
    user_id,
    expires_in
  }: IGenerateRefreshTokenDTO): Promise<IRefreshToken> {
    const refreshToken = new RefreshToken()

    Object.assign(refreshToken, {
      user_id,
      expires_in
    })

    this.refreshToken.push(refreshToken)

    return refreshToken;
  }

  async findByUserId(user_id: string): Promise<IRefreshToken | undefined> {
    const refreshToken = this.refreshToken.find(findRefreshToken => user_id === findRefreshToken.user_id);

    return refreshToken;

  }
}