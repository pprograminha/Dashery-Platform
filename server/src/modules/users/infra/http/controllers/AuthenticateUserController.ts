import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { classToClass } from 'class-transformer'
import AuthenticateUserService from '../../../services/AuthenticateUserService'

export default class AuthenticateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body

    const authenticateUser = container.resolve(AuthenticateUserService)

    const { user, refresh_token, token } = await authenticateUser.execute({
      email,
      password,
    })

    return response.status(201).json({
      user: classToClass(user),
      token,
      refresh_token,
    })
  }
}
