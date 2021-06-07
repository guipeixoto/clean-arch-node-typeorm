import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id?: string = uuidv4();

  @Column()
  name!: string;

  @Column()
  email!: string;

  @Column('date')
  bornAt!: Date;

  @CreateDateColumn()
  createdAt?: Date = new Date();

  @UpdateDateColumn()
  updatedA?: Date = new Date();
}
