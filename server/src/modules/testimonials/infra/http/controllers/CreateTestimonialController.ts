import { Request, Response } from "express"
import { container } from "tsyringe"
import CreateTestimonialService from "../../../services/CreateTestimonialService"

export default class CreateTestimonialController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { title, description } = request.body

    const createTestimonial = container.resolve(CreateTestimonialService)

    const testimonial = await createTestimonial.execute({
      description,
      title
    })

    return response.status(201).json(testimonial)
  }
}