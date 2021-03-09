import { Router } from 'express'
import path from 'path'

import { DepositionController } from './controllers/DepositionController'
import { DifferentialController } from './controllers/DifferentialController'
import { TeamMemberController } from './controllers/TeamMemberController'

const router = Router()

const pathPiece = '../../web/public/views/'
router.get('/', (req, res) => {
   res.sendFile(path.join(__dirname, `${pathPiece}index.html`))
})

router.get('/contact', (req, res) => {
   res.sendFile(path.join(__dirname, `${pathPiece}contact.html`))
})

// api
const depositionController = new DepositionController()

router.get('/api/depositions', depositionController.show)
router.post('/api/depositions', depositionController.create)
router.delete('/api/depositions/:id', depositionController.destroy)
router.put('/api/depositions/:id', depositionController.update)

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

export { router }
