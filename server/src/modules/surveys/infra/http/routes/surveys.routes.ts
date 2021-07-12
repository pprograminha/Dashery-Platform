import { Router } from 'express'
import CreateSurveyController from '../controllers/CreateSurveyController'
import DestroySurveyController from '../controllers/DestroySurveyController'
import ListAllSurveysController from '../controllers/ListAllSurversController'
import ShowSurveyController from '../controllers/ShowSurveyController'
import UpdateSurveyController from '../controllers/UpdateSurveyController'

const surveysRouter = Router()

const listAllSurveysController = new ListAllSurveysController()
const createSurveyController = new CreateSurveyController()
const destroySurveyController = new DestroySurveyController()
const updateSurveyController = new UpdateSurveyController()
const showSurveyController = new ShowSurveyController()

surveysRouter.get('/', listAllSurveysController.handle)
surveysRouter.get('/:id', showSurveyController.handle)
surveysRouter.post('/', createSurveyController.handle)
surveysRouter.delete('/:id', destroySurveyController.handle)
surveysRouter.put('/:id', updateSurveyController.handle)

export default surveysRouter