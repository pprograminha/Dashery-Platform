import { Router } from 'express'
import ensureAuthenticated from '../../../../users/infra/http/middlewares/ensureAuthenticated'
import CreateTestimonialController from '../controllers/CreateTestimonialController'
import DestroyTestimonialController from '../controllers/DestroyTestimonialController'
import ListAllTestimonialsController from '../controllers/ListAllTestimonialsController'
import UpdateTestimonialController from '../controllers/UpdateTestimonialController'

const createTestimonialController = new CreateTestimonialController()
const destroyTestimonialController = new DestroyTestimonialController()
const listAllTestimonialsController = new ListAllTestimonialsController()
const updateTestimonialController = new UpdateTestimonialController()

const testimonialsRouter = Router()

testimonialsRouter.use(ensureAuthenticated)
testimonialsRouter.get('/', (req, res) => {
  return res.status(200).json(['a', 'a'])
})
testimonialsRouter.post('/', createTestimonialController.handle)
testimonialsRouter.delete('/:id', destroyTestimonialController.handle)
testimonialsRouter.put('/:id', updateTestimonialController.handle)

export default testimonialsRouter