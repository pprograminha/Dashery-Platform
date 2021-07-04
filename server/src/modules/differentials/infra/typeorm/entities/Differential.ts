import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from 'typeorm'
import { v4 as uuid } from 'uuid'
import IDifferential from '../../../domain/entities/IDifferential'

@Entity('differentials')
export default class Differential implements IDifferential {
   @PrimaryColumn('uuid')
   readonly id: string

   @Column()
   title: string

   @Column()
   description: string

   @CreateDateColumn()
   created_at: Date

   @UpdateDateColumn()
   updated_at: Date

   constructor() {
      if (!this.id) this.id = uuid()
   }
}
