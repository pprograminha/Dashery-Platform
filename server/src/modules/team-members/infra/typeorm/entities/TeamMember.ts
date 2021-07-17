import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from 'typeorm'
import { v4 as uuid } from 'uuid'
import ITeamMember from '../../../domain/entities/ITeamMember'

@Entity('team_members')
export default class TeamMember implements ITeamMember {
  @PrimaryColumn('uuid')
  readonly id: string

  @Column()
  title: string

  @Column()
  description: string

  @UpdateDateColumn()
  updated_at: Date

  @CreateDateColumn()
  created_at: Date

  constructor() {
    if (!this.id) this.id = uuid()
  }
}
