import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'
import DifferentialsRepository from '../../typeorm/repositories/DifferentialsRepository'

export default class UpdateDifferentialController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { title, description, differential_id } = request.body

    const differentialRepository = getCustomRepository(DifferentialsRepository)

    const differential = await differentialRepository.findById(differential_id)

    if (!differential) return response.status(400).json({ msg: 'not found' })

    differential.title = title
    differential.description = description

    await differentialRepository.save(differential)

    return response.status(200).json(differential)
  }
}
