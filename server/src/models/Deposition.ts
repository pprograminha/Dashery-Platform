import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm'
import { v4 as uuid } from 'uuid'

@Entity('depositions')
export class Deposition {
   @PrimaryColumn('uuid')
   readonly id: string

   @Column('varchar')
   username: string

   @Column('varchar')
   user_image: string

   @Column('text')
   deposition: string

   @CreateDateColumn()
   created_at: Date

   constructor() {
      if (!this.id) this.id = uuid()
   }
}
