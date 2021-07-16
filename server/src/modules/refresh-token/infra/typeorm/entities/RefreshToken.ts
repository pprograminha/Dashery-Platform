import { v4 as uuid } from "uuid";
import { Column, CreateDateColumn, Entity, OneToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import User from "../../../../users/infra/typeorm/entities/User";

@Entity('refresh_token')
export default class RefreshToken {
  @PrimaryColumn()
  id: string;

  @Column()
  expires_in: number;

  @Column()
  @OneToOne(() => User)
  user_id: string;

  @CreateDateColumn()
  updated_at: Date;

  @UpdateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}