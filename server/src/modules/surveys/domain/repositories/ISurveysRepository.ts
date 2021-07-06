import ICreateSurveyDTO from "../../dtos/ICreateSurveyDTO";
import ISurvey from "../entities/ISurvey";

export default interface ISurveysRepository {
  destroyById(survey_id: string): Promise<void>
  findById(survey_id: string): Promise<ISurvey | undefined>
  findAllSurveys(): Promise<ISurvey[]>
  save(survey: ISurvey): Promise<void>
  create(surveyData: ICreateSurveyDTO): Promise<ISurvey>
}
