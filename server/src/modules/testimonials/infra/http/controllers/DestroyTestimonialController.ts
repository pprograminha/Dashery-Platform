import { Request, Response } from "express"
import { getCustomRepository } from "typeorm"
import TestimonialsRepository from "../../typeorm/repositories/TestimonialsRepository"

export default class DestroyTestimonialController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params
    const testimonialRepository = getCustomRepository(TestimonialsRepository)

    const testimonial = await testimonialRepository.findById(id)
    await testimonialRepository.destroyById(id)

    if (!testimonial) return response.status(400).json({ msg: 'not found' })
    return response.json(testimonial)
  }
}