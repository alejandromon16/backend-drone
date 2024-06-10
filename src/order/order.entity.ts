import { Client } from 'src/client/client.entity';
import { Drone } from 'src/drone/drone.entity';
import { Entity, PrimaryGeneratedColumn, ManyToOne, ManyToMany, JoinTable, Column, ObjectIdColumn } from 'typeorm';

@Entity()
export class Order {
  @ObjectIdColumn()
  _id: string;
  
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  user: string;

  @Column()
  products: string;

  @Column('decimal')
  totalAmount: number;

  @Column()
  orderDate: Date;

  @Column()
  deliveryDate: Date;

  @Column()
  status: string;

  @Column()
  address: string;
}
