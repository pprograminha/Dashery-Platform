import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { classToClass } from 'class-transformer'
import CreateUserService from '../../../services/CreateUserService'

export default class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { firstname, role, lastname, email, password } = request.body

    const createUser = container.resolve(CreateUserService)

    const { user, refresh_token, token } = await createUser.execute({
      email,
      password,
      firstname,
      lastname,
      role,
    })

    return response.status(201).json({
      user: classToClass(user),
      token,
      refresh_token,
    })
  }
}
