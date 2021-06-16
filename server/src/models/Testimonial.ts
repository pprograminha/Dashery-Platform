import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm'
import { v4 as uuid } from 'uuid'

@Entity('testimonials')
export class Testimonial {
   @PrimaryColumn('uuid')
   readonly id: string

   @Column('varchar')
   username: string

   @Column('varchar')
   user_image: string

   @Column('text')
   testimonial: string

   @CreateDateColumn()
   created_at: Date

   constructor() {
      if (!this.id) this.id = uuid()
   }
}
