import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import { Differentials } from '../models/Differentials'

export class DifferentialController {
   async show(req: Request, res: Response) {}
   async create(req: Request, res: Response) {
      const { icon, title, description } = req.body
      const differentialRepository = getRepository(Differentials)
      const differentials = differentialRepository.create({
         icon,
         title,
         description,
      })

      await differentialRepository.save(differentials)
      res.send(req.body)
   }
   async destroy(req: Request, res: Response) {}
   async update(req: Request, res: Response) {}
}
