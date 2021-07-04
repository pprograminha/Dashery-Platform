import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'
import DifferentialsRepository from '../../typeorm/repositories/DifferentialsRepository'

export default class ListAllDifferentialsController {
   async handle(req: Request, res: Response) {
      const differentialsRepository = getCustomRepository(DifferentialsRepository)
      const differentials = await differentialsRepository.listAllDifferentials()

      res.status(200).json(differentials)
   }
}
