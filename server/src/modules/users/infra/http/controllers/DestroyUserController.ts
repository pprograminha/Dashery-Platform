import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'
import UsersRepository from '../../typeorm/repositories/UsersRepository'

export default class DestroyUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params
    const usersRepository = getCustomRepository(UsersRepository)
    const user = await usersRepository.findById(id)

    if (!user) {
      return response.status(400).json({ msg: 'user not found' })
    }
    await usersRepository.destroyById(id)

    return response.status(200).json()
  }
}
