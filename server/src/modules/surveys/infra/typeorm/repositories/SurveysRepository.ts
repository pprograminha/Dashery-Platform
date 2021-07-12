import { getRepository, Repository } from 'typeorm'
import ISurvey from '../../../domain/entities/ISurvey'
import ISurveysRepository from '../../../domain/repositories/ISurveysRepository'
import ICreateSurveyDTO from '../../../dtos/ICreateSurveyDTO'
import Survey from '../entities/Survey'

export default class SurveysRepository implements ISurveysRepository {
  private ormRepository: Repository<Survey>

  constructor() {
    this.ormRepository = getRepository(Survey)
  }

  async findById(survey_id: string): Promise<ISurvey | undefined> {
    const survey = await this.ormRepository.findOne({
      where: {
        id: survey_id
      }
    })

    return survey
  }

  async save(survey: ISurvey): Promise<void> {
    await this.ormRepository.save(survey)
  }

  async create({
    description,
    title
  }: ICreateSurveyDTO): Promise<ISurvey> {
    const survey = this.ormRepository.create({
      description,
      title
    })
    await this.ormRepository.save(survey)

    return survey
  }

  async destroyById(survey_id: string): Promise<void> {
    await this.ormRepository.delete(survey_id)
  }

  async findAllSurveys(): Promise<ISurvey[]> {
    const surveys = await this.ormRepository.find()

    return surveys
  }
}
