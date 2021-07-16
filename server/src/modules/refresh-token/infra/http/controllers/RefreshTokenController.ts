import { Request, Response } from "express";
import { container } from "tsyringe";
import RefreshTokenService from "../../../services/RefreshTokenService";

export default class RefreshTokenController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { refresh_token_id } = request.body;

    const refreshToken = container.resolve(RefreshTokenService)

    const {
      token,
      refresh_token
    } = await refreshToken.execute({
      refresh_token_id,
    })

    return response.status(200).json({
      token,
      refresh_token
    });
  }

}