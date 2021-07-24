import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'
import UsersRepository from '../../typeorm/repositories/UsersRepository'

export default class UpdateUserProfileController {
   async handle(request: Request, response: Response) {
      const { id } = request.params
      const { firstname, lastname, email, password } = request.body

      const userRepository = getCustomRepository(UsersRepository)
      try {
         await userRepository.update(
            { id },
            { firstname, lastname, email, password }
         )
         const user = await userRepository.findOne(id)
         if (!user) return response.status(400).json({ msg: 'user not found' })

         return response.status(200).json(user)
      } catch (error) {
         return response.status(400).json({ msg: error })
      }
   }
}
