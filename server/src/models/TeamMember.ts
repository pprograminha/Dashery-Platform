import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm'
import { v4 as uuid } from 'uuid'

@Entity('teammembers')
export class TeamMember {
   @PrimaryColumn('uuid')
   readonly id: string

   @Column('varchar')
   title: string

   @Column('varchar')
   member_image: string

   @Column('varchar')
   description_one: string

   @Column('varchar')
   description_two: string

   @CreateDateColumn()
   created_at: Date

   constructor() {
      if (!this.id) this.id = uuid()
   }
}
