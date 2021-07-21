import { getRepository, Repository } from "typeorm";
import ITestimonial from "../../../domain/entities/ITestimonial";
import ITestimonialsRepository from "../../../domain/repositories/ITestimonialsRepository";
import ICreateTestimonialDTO from "../../../dtos/ICreateTestimonialDTO";
import Testimonial from "../entities/Testimonial";

export default class TestimonialsRepository implements ITestimonialsRepository {
  private ormRepository: Repository<Testimonial>

  constructor() {
    this.ormRepository = getRepository(Testimonial)
  }

  async findById(testimonial_id: string): Promise<ITestimonial | undefined> {
    const testimonial = await this.ormRepository.findOne({
      where: {
        id: testimonial_id
      }
    })

    return testimonial
  }

  async save(testimonial: ITestimonial): Promise<void> {
    await this.ormRepository.save(testimonial)
  }

  async create({
    title,
    description,
  }: ICreateTestimonialDTO): Promise<ITestimonial> {
    const testimonialc = this.ormRepository.create({
      title,
      description,
    })

    await this.ormRepository.save(testimonialc)

    return testimonialc
  }

  async destroyById(testimonial_id: string): Promise<void> {
    await this.ormRepository.delete(testimonial_id)
  }

  async findAllTestimonials(): Promise<ITestimonial[]> {
    const testimonials = await this.ormRepository.find()

    return testimonials
  }

}
