import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'
import SurveysRepository from '../../typeorm/repositories/SurveysRepository'

export default class DestroySurveyController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params
    const surveysRepository = getCustomRepository(SurveysRepository)
    const survey = await surveysRepository.findById(id)

    if (!survey) {
      return response.status(400).json({ msg: 'error' })
    }
    await surveysRepository.destroyById(id)

    return response.status(200).json(survey)
  }
}
