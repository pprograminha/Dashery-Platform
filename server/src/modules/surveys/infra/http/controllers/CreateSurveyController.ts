import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'
import SurveysRepository from '../../typeorm/repositories/SurveysRepository'

export default class CreateSurveyController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { title, description } = request.body
    const surveysRepository = getCustomRepository(SurveysRepository)

    const survey = await surveysRepository.create({
      title,
      description,
    })

    return response.status(201).json(survey)
  }
}
