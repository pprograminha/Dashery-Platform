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
      const users = userRepository.find()

      return res.status(200).json(users)
   }
   /**
    * get
    */
   async getUser(req: Request, res: Response) {
      const { id } = req.params

      const userRepository = getCustomRepository(UserRepository)
      const user = userRepository.findOne(id)
      if (!user) {
         return res.status(400).json({ msg: 'User does not exists' })
      }
      return res.status(200).json(user)
   }
   /**
    * post
    */
   async createUser(req: Request, res: Response) {
      const { firstname, lastname, email } = <User>req.body
   }
   /**
    * delete
    */
   async destroyUser(req: Request, res: Response) {}
   /**
    * put
    */
   async updateUser(req: Request, res: Response) {}
}
