import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'
import { DepositionRepository } from '../repositories/DepositionRepository'

export class DepositionController {
   async create(req: Request, res: Response) {
      const { username, deposition } = req.body
      const depositionRepository = getCustomRepository(DepositionRepository)

      const depositionr = depositionRepository.create({
         username,
         deposition,
      })

      await depositionRepository.save(depositionr)

      return res.send(depositionr)
   }
   async show(req: Request, res: Response) {
      const depositionRepository = getCustomRepository(DepositionRepository)
      const depositions = await depositionRepository.find()

      return res.send(depositions)
   }
}
