import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'
import SurveysRepository from '../../typeorm/repositories/SurveysRepository'

export default class UpdateSurveyController {
  async handle(request: Request, response: Response) {
    const { id } = request.params
    const { title, description } = request.body

    const surveysRepository = getCustomRepository(SurveysRepository)

    const survey = await surveysRepository.findById(id)

    if (!survey) return response.status(400).json({ msg: 'not found' })

    survey.title = title
    survey.description = description

    await surveysRepository.save(survey)


    return response.status(200).json(survey)
  }
}
