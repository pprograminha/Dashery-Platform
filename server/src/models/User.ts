import {
   Column,
   CreateDateColumn,
   Entity,
   PrimaryColumn,
   UpdateDateColumn,
} from 'typeorm'
import { v4 as uuid } from 'uuid'

@Entity('users')
export class User {
   @PrimaryColumn()
   readonly id: string

   @Column('varchar', {
      length: 100,
   })
   firstname: string

   @Column('varchar', {
      length: 100,
   })
   lastname: string

   @Column('varchar', {
      length: 100,
   })
   email: string

   @Column('varchar')
   password: string

   @Column('varchar', {
      nullable: true,
   })
   secret: string

   @UpdateDateColumn()
   updated_at: Date

   @CreateDateColumn()
   created_at: Date

   constructor() {
      if (!this.id) this.id = uuid()
   }
}
