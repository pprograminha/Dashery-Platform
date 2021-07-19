import { Request, Response } from "express"
import { getCustomRepository } from "typeorm"
import TestimonialsRepository from "../../typeorm/repositories/TestimonialsRepository"

export default class UpdateTestimonialController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params
    const { testimonial, user_image, username } = request.body
    const testimonialsRepository = getCustomRepository(TestimonialsRepository)
    const testimonialu = await testimonialsRepository.findById(id)

    if (!testimonialu) return response.status(400).json({ msg: 'not found' })

    testimonialu.testimonial = testimonial
    testimonialu.user_image = user_image
    testimonialu.username = username

    await testimonialsRepository.save(testimonialu)

    return response.json(testimonialu)
  }
}