import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm'
import { v4 as uuid } from 'uuid'

@Entity('differentials')
export class Differentials {
   @PrimaryColumn('uuid')
   readonly id: string

   @Column('varchar')
   icon: string

   @Column('varchar')
   title: string

   @Column('text')
   description: string

   @CreateDateColumn()
   created_at: Date

   constructor() {
      if (!this.id) this.id = uuid()
   }
}
