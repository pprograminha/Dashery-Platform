import { celebrate, Segments, Joi } from 'celebrate'
import { Router } from 'express'
import CreateUserController from '../controllers/CreateUserController'
import DestroyUserController from '../controllers/DestroyUserController'
import ListAllUsersController from '../controllers/ListAllUsersController'

const usersRouter = Router()

const destroyUserController = new DestroyUserController()
const listAllUsersController = new ListAllUsersController()
const createUserController = new CreateUserController()

usersRouter.get('/', listAllUsersController.handle)
usersRouter.post('/', celebrate({
  [Segments.BODY]: {
    firstname: Joi.string().min(2).max(60).required(),
    lastname: Joi.string().min(2).max(100).required(),
    email: Joi.string().email().max(100).required(),
    password: Joi.string().min(8).max(100).required(),
  }
}), createUserController.handle)
usersRouter.delete('/', destroyUserController.handle)

export default usersRouter