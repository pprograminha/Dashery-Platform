import ICreateTestimonialDTO from "../../dtos/ICreateTestimonialDTO";
import ITestimonial from "../entities/ITestimonial";

export default interface ITestimonialsRepository {
  destroyById(testimonial_id: string): Promise<void>
  findById(testimonial_id: string): Promise<ITestimonial | undefined>
  findAllTestimonials(): Promise<ITestimonial[]>
  save(testimonial_id: ITestimonial): Promise<void>
  create(testimonial_data: ICreateTestimonialDTO): Promise<ITestimonial>
}