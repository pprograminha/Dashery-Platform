import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'
import { Survey } from '../models/Survey'
import { SurveyRepository } from '../repositories/SurveyRepository'

export class SurveyController {
   /**
    * get
    */
   async getSurveys(req: Request, res: Response) {
      const surveyRepository = getCustomRepository(SurveyRepository)
      const surveys = await surveyRepository.find()

      return res.status(200).json(surveys)
   }
   /**
    * get
    */
   async getSurvey(req: Request, res: Response) {
      const { id } = req.params
      const surveyRepository = getCustomRepository(SurveyRepository)
      const survey = await surveyRepository.findOne(id)

      return res.status(200).json(survey)
   }
   /**
    * post
    */
   async createSurvey(req: Request, res: Response) {
      const { title, description } = req.body
      const surveyRepository = getCustomRepository(SurveyRepository)
      const survey = surveyRepository.create({
         title,
         description,
      })
      await surveyRepository.save(survey)

      return res.status(201).json(req.body)
   }
   /**
    * delete
    */
   async destroySurvey(req: Request, res: Response) {
      const { id } = req.params
      const surveyRepository = getCustomRepository(SurveyRepository)
      const survey = await surveyRepository.findOne(id)

      if (!survey) {
         return res.status(400).json({ msg: 'error' })
      }
      await surveyRepository.delete(id)

      return res.status(200).json(survey)
   }
   /**
    * put
    */
   async updateSurvey(req: Request, res: Response) {
      const { id } = req.params
      const { title, description } = <Survey>req.body

      const surveyRepository = getCustomRepository(SurveyRepository)
      await surveyRepository.update({ id }, { title, description })

      const survey = await surveyRepository.findOne(id)

      return res.status(200).json(survey)
   }
}
