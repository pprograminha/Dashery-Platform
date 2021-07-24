import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'
import UsersRepository from '../../typeorm/repositories/UsersRepository'

export default class ListAllUsersController {
  async handle(request: Request, response: Response): Promise<Response> {
    const userRepository = getCustomRepository(UsersRepository)
    const users = await userRepository.findAllUsers()

    return response.status(200).json(users)
  }
}
