import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'
import TestimonialsRepository from "../../typeorm/repositories/TestimonialsRepository"

export default class ListAllTestimonialsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const testimonialsRepository = getCustomRepository(TestimonialsRepository)
    const testimonials = await testimonialsRepository.findAllTestimonials()

    return response.status(200).json(testimonials)
  }
}
