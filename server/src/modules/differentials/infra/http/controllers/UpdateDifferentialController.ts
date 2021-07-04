import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'
import DifferentialsRepository from '../../typeorm/repositories/DifferentialsRepository'

export default class UpdateDifferentialController {
   async handle(req: Request, res: Response) {
      const { title, description, differential_id } = req.body

      const differentialRepository = getCustomRepository(DifferentialsRepository)
      
      const differential = await differentialRepository.listById(differential_id)
      
      if (!differential) return res.status(400).json({ msg: 'not found' })

      differential.title = title
      differential.description = description

      await differentialRepository.save(differential)

      return res.status(200).json(differential)
   }
}
