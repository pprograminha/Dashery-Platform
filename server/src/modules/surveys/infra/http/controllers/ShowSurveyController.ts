import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'
import SurveysRepository from '../../typeorm/repositories/SurveysRepository'

export default class ShowSurveyController {
  async handle(req: Request, res: Response) {
    const { id } = req.params
    const surveysRepository = getCustomRepository(SurveysRepository)
    const survey = await surveysRepository.findById(id)

    return res.status(200).json(survey)
  }
}
