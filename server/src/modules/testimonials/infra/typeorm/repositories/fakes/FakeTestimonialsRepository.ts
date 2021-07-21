import ITestimonial from '../../../../domain/entities/ITestimonial';
import ITestimonialsRepository from '../../../../domain/repositories/ITestimonialsRepository';
import ICreateTestimonialDTO from '../../../../dtos/ICreateTestimonialDTO';
import Testimonial from '../../entities/Testimonial';

export default class FakeTestimonialsRepository implements ITestimonialsRepository {
  private testimonials: ITestimonial[] = []


  async findById(user_id: string): Promise<ITestimonial | undefined> {
    const user = this.testimonials.find((findUser) => findUser.id === user_id)

    return user
  }

  async save(user: ITestimonial): Promise<void> {
    const findIndex = this.testimonials.findIndex((findUser) => findUser.id === user.id)

    this.testimonials[findIndex] = user
  }

  async create(testimonial_data: ICreateTestimonialDTO): Promise<ITestimonial> {
    const testimonial = new Testimonial()

    Object.assign(testimonial, {
      ...testimonial_data
    })

    this.testimonials.push(testimonial)

    return testimonial
  }

  async destroyById(user_id: string): Promise<void> {
    const findIndex = this.testimonials.findIndex((findUser) => findUser.id === user_id)

    this.testimonials.splice(findIndex, 1)
  }

  async findAllTestimonials(): Promise<ITestimonial[]> {
    const { testimonials } = this

    return testimonials
  }
}
