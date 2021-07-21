import { inject } from "tsyringe"
import ITestimonial from "../domain/entities/ITestimonial"
import ITestimonialsRepository from "../domain/repositories/ITestimonialsRepository"
import ICreateTestimonialRequestDTO from "../dtos/ICreateTestimonialRequestDTO"

export default class CreateTestimonialService {
  constructor(
    @inject('TestimonialsRepository')
    private testimonialsRepository: ITestimonialsRepository
  ) { }

  async execute({
    description,
    title
  }: ICreateTestimonialRequestDTO): Promise<ITestimonial> {
    const testimonial = await this.testimonialsRepository.create({
      description,
      title
    })

    return testimonial
  }
}