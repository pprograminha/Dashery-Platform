import { Router } from 'express'
import ShowUserProfileController from '../controllers/ShowUserProfileController'
import UpdateUserProfileController from '../controllers/UpdateUserProfileController'

const profileRouter = Router()

const updateUserProfileController = new UpdateUserProfileController()
const showUserProfileController = new ShowUserProfileController()

profileRouter.get('/', showUserProfileController.handle)
profileRouter.put('/', updateUserProfileController.handle)

export default profileRouter