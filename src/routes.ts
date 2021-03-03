import { Router } from 'express'
import path from 'path'

import { DepositionController } from './controllers/DepositionController'

const router = Router()

router.get('/', (req, res) => {
   res.sendFile(path.join(__dirname, '../public/index.html'))
})

router.get('/contact', (req, res) => {
   res.sendFile(path.join(__dirname, '../public/pages/contact.html'))
})

// api
const depositionController = new DepositionController()

router.get('/api/depositions', depositionController.show)
router.post('/api/depositions', depositionController.create)

export { router }
