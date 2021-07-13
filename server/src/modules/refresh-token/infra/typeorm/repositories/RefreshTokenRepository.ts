import { getRepository, Repository } from "typeorm";
import IRefreshToken from "../../../domain/entities/IRefreshToken";
import IRefreshTokenRepository from "../../../domain/repositories/IRefreshTokenRepository";
import IGenerateRefreshTokenDTO from "../../../dtos/IGenerateRefreshTokenDTO";
import RefreshToken from "../entities/RefreshToken";

export default class RefreshTokenRepository implements IRefreshTokenRepository {

  private ormRepository: Repository<IRefreshToken>

  constructor() {
    this.ormRepository = getRepository(RefreshToken);
  }

  async destroyByRefreshToken(refreshToken: IRefreshToken): Promise<void> {
    await this.ormRepository.remove(refreshToken);
  }

  async destroyById(refresh_token_id: string): Promise<void> {
    await this.ormRepository.delete(refresh_token_id);
  }

  async findById(refresh_token_id: string): Promise<IRefreshToken | undefined> {
    const refreshToken = await this.ormRepository.findOne({
      where: {
        id: refresh_token_id
      }
    });

    return refreshToken;
  }

  async generate({
    user_id,
    expires_in
  }: IGenerateRefreshTokenDTO): Promise<IRefreshToken> {
    const refreshToken = this.ormRepository.create({
      user_id,
      expires_in
    });

    await this.ormRepository.save(refreshToken);

    return refreshToken;
  }

  async findByUserId(user_id: string): Promise<IRefreshToken | undefined> {
    const refreshToken = await this.ormRepository.findOne({
      where: {
        user_id
      }
    });

    return refreshToken;
  }
}