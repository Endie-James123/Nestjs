import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  username: string;

  @Column()
  email: string;

  @Column({ default: true })
  isRobot: boolean;
}