import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'
import { Deposition } from '../models/Deposition'
import { DepositionRepository } from '../repositories/DepositionRepository'

export class DepositionController {
   async show(req: Request, res: Response) {
      const depositionRepository = getCustomRepository(DepositionRepository)
      const depositions = await depositionRepository.find()

      return res.status(200).json(depositions)
   }
   async create(req: Request, res: Response) {
      const { username, deposition } = req.body
      const depositionRepository = getCustomRepository(DepositionRepository)
      try {
         const depositionr = depositionRepository.create({
            username,
            deposition,
         })

         await depositionRepository.save(depositionr)

         return res.status(201).json(depositionr)
      } catch (error) {
         return res.status(400).json({ msg: error })
      }
   }
   async destroy(req: Request, res: Response) {
      const { id } = req.params
      const depositionRepository = getCustomRepository(DepositionRepository)

      const deposition = await depositionRepository.findOne(id)
      await depositionRepository.delete(id)

      if (!deposition) return res.status(400).json({ msg: 'not found' })
      return res.json(deposition)
   }
   async update(req: Request, res: Response) {
      const { id } = req.params
      const { deposition, user_image, username } = <Deposition>req.body
      const depositionRepository = getCustomRepository(DepositionRepository)

      await depositionRepository.update(
         { id },
         { deposition, user_image, username }
      )
      const depositionu = await depositionRepository.findOne(id)

      if (!depositionu) return res.status(400).json({ msg: 'not found' })
      return res.json(depositionu)
   }
}
