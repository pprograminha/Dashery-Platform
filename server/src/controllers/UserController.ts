import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'
import { User } from '../models/User'
import { UserRepository } from '../repositories/UserRepository'

export class UserController {
   /**
    * get
    */
   async getUsers(req: Request, res: Response) {
      const userRepository = getCustomRepository(UserRepository)
      const users = await userRepository.find()

      return res.status(200).json(users)
   }
   /**
    * get
    */
   async getUser(req: Request, res: Response) {
      const { id } = req.params

      const userRepository = getCustomRepository(UserRepository)
      const user = await userRepository.findOne(id)
      if (!user) {
         return res.status(400).json({ msg: 'User does not exists' })
      }
      return res.status(200).json(user)
   }
   /**
    * post
    */
   async createUser(req: Request, res: Response) {
      const { firstname, lastname, email, password, secret } = <User>req.body

      const userRepository = getCustomRepository(UserRepository)
      const user = userRepository.create({
         firstname,
         lastname,
         email,
         password,
         secret,
      })
      const isUserAlreadExists = await userRepository.findOne({ email })
      if (isUserAlreadExists)
         res.status(400).json({ msg: 'user alread exists' })

      await userRepository.save(user)

      return res.status(200).json(user)
   }
   /**
    * delete
    */
   async destroyUser(req: Request, res: Response) {
      const { id } = req.params
      const userRepository = getCustomRepository(UserRepository)
      const user = await userRepository.findOne(id)

      if (user) {
         await userRepository.delete(id)
         return res.status(200).json(user)
      }
      return res.status(400).json({ msg: 'user not found' })
   }
   /**
    * put
    */
   async updateUser(req: Request, res: Response) {
      const { id } = req.params
      const { firstname, lastname, email, password } = <User>req.body

      const userRepository = getCustomRepository(UserRepository)
      try {
         await userRepository.update(
            { id },
            { firstname, lastname, email, password }
         )
         const user = await userRepository.findOne(id)
         if (!user) return res.status(400).json({ msg: 'user not found' })

         return res.status(200).json(user)
      } catch (error) {
         return res.status(400).json({ msg: error })
      }
   }
}
