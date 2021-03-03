import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm'
import { v4 as uuid } from 'uuid'

@Entity('depositions')
export class Deposition {
   @PrimaryColumn()
   readonly id: string

   @Column()
   username: string

   @Column()
   deposition: string

   @CreateDateColumn()
   created_at: Date

   constructor() {
      if (!this.id) this.id = uuid()
   }
}
