import { Router } from 'express'
import CreateDifferentialController from '../controllers/CreateDifferentialController'
import DestroyDifferentialController from '../controllers/DestroyDifferentialController'
import ListAllDifferentialsController from '../controllers/ListAllDifferentialsController'
import UpdateDifferentialController from '../controllers/UpdateDifferentialController'

const differentialsRouter = Router()

const updateDifferentialController = new UpdateDifferentialController()
const destroyDifferentialController = new DestroyDifferentialController()
const createDifferentialController = new CreateDifferentialController()
const listAllDifferentialsController = new ListAllDifferentialsController()

differentialsRouter.get('/', listAllDifferentialsController.handle)
differentialsRouter.post('/', createDifferentialController.handle)
differentialsRouter.delete('/', destroyDifferentialController.handle)
differentialsRouter.put('/', updateDifferentialController.handle)

export default differentialsRouter