import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'
import UsersRepository from '../../typeorm/repositories/UsersRepository'

export default class ShowUserProfileController {
   async handle(request: Request, response: Response) {
      const { username } = request.query

      const userRepository = getCustomRepository(UsersRepository)

      const user = await userRepository.findOne({
         where: {
            username: String(username)
         }
      })

      if (!user) {
         return response.status(400).json({ msg: 'User does not exists' })
      }
      return response.status(200).json(user)
   }
}
