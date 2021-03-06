import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'
import { DifferentialRepository } from './../repositories/DifferentialRepository'

export class DifferentialController {
   async show(req: Request, res: Response) {
      const differentialRepository = getCustomRepository(DifferentialRepository)
      const differentials = await differentialRepository.find()

      res.status(200).send(differentials)
   }
   async create(req: Request, res: Response) {
      const { icon, title, description } = req.body
      const differentialRepository = getCustomRepository(DifferentialRepository)
      
      const differentials = differentialRepository.create({
         icon,
         title,
         description,
      })

      await differentialRepository.save(differentials)
      res.status(201).send(req.body)
   }
   async destroy(req: Request, res: Response) {
      const { id } = req.params
      const differentialRepository = getCustomRepository(DifferentialRepository)

      await differentialRepository.delete(id)

      res.status(200).send('deleted')
   }
   async update(req: Request, res: Response) {
      const { id } = req.params
      const { icon, title, description } = req.body

      const differentialRepository = getCustomRepository(DifferentialRepository)

      await differentialRepository.update({ id }, { icon, title, description })

      res.status(200).send(req.body)
   }
}
