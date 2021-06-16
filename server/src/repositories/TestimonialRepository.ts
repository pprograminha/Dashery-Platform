import { EntityRepository, Repository } from "typeorm";
import { Testimonial } from "./../models/Testimonial";

@EntityRepository(Testimonial)
export class TestimonialRepository extends Repository<Testimonial> {}
