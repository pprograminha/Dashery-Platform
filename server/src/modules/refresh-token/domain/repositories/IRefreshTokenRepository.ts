import IGenerateRefreshTokenDTO from "../../dtos/IGenerateRefreshTokenDTO";
import IRefreshToken from "../entities/IRefreshToken";

export default interface IRefreshTokenRepository {
  destroyByRefreshToken(refresh_token: IRefreshToken): Promise<void>;
  destroyById(refresh_token_id: string): Promise<void>;
  findById(refresh_token_id: string): Promise<IRefreshToken | undefined>;
  findByUserId(user_id: string): Promise<IRefreshToken | undefined>;
  generate(refresh_token_data: IGenerateRefreshTokenDTO): Promise<IRefreshToken>;
}