import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'
import DifferentialsRepository from '../../typeorm/repositories/DifferentialsRepository'

export default class DestroyDifferentialController {
   async handle(req: Request, res: Response) {
      const { differential_id } = req.body
      const differentialRepository = getCustomRepository(DifferentialsRepository)

      const differential = await differentialRepository.listById(differential_id)

      if (!differential) return res.status(400).json({ msg: 'not found' })

      await differentialRepository.destroyById(differential_id)

      return res.status(200).json(req.body)
   }
}
