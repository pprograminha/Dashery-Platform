import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'
import SurveysRepository from '../../typeorm/repositories/SurveysRepository'

export default class ListAllSurveysController {
  async handle(request: Request, response: Response): Promise<Response> {
    const surveysRepository = getCustomRepository(SurveysRepository)
    const surveys = await surveysRepository.findAllSurveys()

    return response.status(200).json(surveys)
  }
}
