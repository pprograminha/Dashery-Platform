import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from 'typeorm'
import { v4 as uuid } from 'uuid'
import ITestimonial from '../../../domain/entities/ITestimonial'

@Entity('testimonials')
export default class Testimonial implements ITestimonial {
  @PrimaryColumn('uuid')
  readonly id: string

  @Column()
  title: string

  @Column('text')
  description: string

  @UpdateDateColumn()
  updated_at: Date

  @CreateDateColumn()
  created_at: Date

  constructor() {
    if (!this.id) this.id = uuid()
  }
}
