import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm'
import { v4 as uuid } from 'uuid'

@Entity('teammembers')
export class TeamMembers {
   @PrimaryColumn('uuid')
   readonly id: string

   @Column('varchar')
   title: string

   @Column('varchar')
   member_image: string | null

   @Column('varchar')
   description_one: string

   @Column('varchar')
   description_two: string | null

   @CreateDateColumn()
   created_at: Date

   constructor() {
      if (!this.id) this.id = uuid()
   }
}
