import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'
import DifferentialsRepository from '../../typeorm/repositories/DifferentialsRepository'

export default class ListAllDifferentialsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const differentialsRepository = getCustomRepository(DifferentialsRepository)
    const differentials = await differentialsRepository.findAllDifferentials()

    return response.status(200).json(differentials)
  }
}
