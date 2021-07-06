import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'
import DifferentialsRepository from '../../typeorm/repositories/DifferentialsRepository'

export default class CreateDifferentialController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { title, description } = request.body
    const differentialsRepository = getCustomRepository(DifferentialsRepository)
    try {
      const differential = await differentialsRepository.create({
        title,
        description,
      })

      return response.status(201).json(differential)
    } catch (error) {
      return response.status(400).json({ msg: error })
    }
  }
}
