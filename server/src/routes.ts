import { Router } from 'express'
import path from 'path'

import { TestimonialController } from './controllers/TestimonialController'
import { DifferentialController } from './controllers/DifferentialController'
import { SurveyController } from './controllers/SurveyController'
import { TeamMemberController } from './controllers/TeamMemberController'
import { UserController } from './controllers/UserController'

const router = Router()

const pathPiece = '../../web/public/views/'
router.get('/', (req, res) => {
   res.sendFile(path.join(__dirname, `${pathPiece}index.html`))
})

router.get('/contact', (req, res) => {
   res.sendFile(path.join(__dirname, `${pathPiece}contact.html`))
})

// api
const testimonialController = new TestimonialController()

router.get('/api/testimonials', testimonialController.show)
router.post('/api/testimonials', testimonialController.create)
router.delete('/api/testimonials/:id', testimonialController.destroy)
router.put('/api/testimonials/:id', testimonialController.update)

const differentialController = new DifferentialController()

router.get('/api/differentials', differentialController.show)
router.post('/api/differentials', differentialController.create)
router.delete('/api/differentials/:id', differentialController.destroy)
router.put('/api/differentials/:id', differentialController.update)

const teamMemberController = new TeamMemberController()

router.get('/api/teamMembers', teamMemberController.show)
router.post('/api/teamMembers', teamMemberController.create)
router.delete('/api/teamMembers/:id', teamMemberController.destroy)
router.put('/api/teamMembers/:id', teamMemberController.update)

const userController = new UserController()

router.get('/api/users', userController.getUsers)
router.get('/api/users/:id', userController.getUser)
router.post('/api/users', userController.createUser)
router.delete('/api/users/:id', userController.destroyUser)
router.put('/api/users/:id', userController.updateUser)

const surveyController = new SurveyController()

router.get('/api/surveys', surveyController.getSurveys)
router.get('/api/surveys/:id', surveyController.getSurvey)
router.post('/api/surveys', surveyController.createSurvey)
router.delete('/api/surveys/:id', surveyController.destroySurvey)
router.put('/api/surveys/:id', surveyController.updateSurvey)

export { router }
