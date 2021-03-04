import { Router } from 'express'
import path from 'path'

import { DepositionController } from './controllers/DepositionController'
import { DifferentialController } from './controllers/DifferentialController'

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

export { router }
