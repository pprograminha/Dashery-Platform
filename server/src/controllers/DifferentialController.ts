import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'
import { DifferentialRepository } from './../repositories/DifferentialRepository'

export class DifferentialController {
   async show(req: Request, res: Response) {
      const differentialRepository = getCustomRepository(DifferentialRepository)
      const differentials = await differentialRepository.find()

      res.status(200).json(differentials)
   }
   async create(req: Request, res: Response) {
      const { icon, title, description } = req.body
      const differentialRepository = getCustomRepository(DifferentialRepository)
      try {
         const differentials = differentialRepository.create({
            icon,
            title,
            description,
         })

         await differentialRepository.save(differentials)
         res.status(201).json(req.body)
      } catch (error) {
         res.status(400).json({ msg: error })
      }
   }
   async destroy(req: Request, res: Response) {
      const { id } = req.params
      const differentialRepository = getCustomRepository(DifferentialRepository)

      const differential = await differentialRepository.findOne(id)
      await differentialRepository.delete(id)

      if (!differential) return res.status(400).json({ msg: 'not found' })
      return res.status(200).json(req.body)
   }
   async update(req: Request, res: Response) {
      const { id } = req.params
      const { icon, title, description } = req.body

      const differentialRepository = getCustomRepository(DifferentialRepository)
      const differential = await differentialRepository.findOne(id)

      await differentialRepository.update({ id }, { icon, title, description })

      if (!differential) return res.status(400).json({ msg: 'not found' })
      return res.status(200).json(req.body)
   }
}
