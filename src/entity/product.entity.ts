import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class productEntity {
  //PrimaryGeneratedColumn automatically generates an id for our product
  @PrimaryGeneratedColumn()
  id: number;

  //CreateDateColumn automatically Create the date and time we created and added our product
  @CreateDateColumn()
  date: Date;

  //Column stands for the columns in the database
  @Column()//we explicitly define our product name to be  a string
  name: string;

  @Column()//we explicitly define our product brand to be  a string
  brand: string;

  @Column()//we explicitly define our product price to be  a number
  price: number;
}
