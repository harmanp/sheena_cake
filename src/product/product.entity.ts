import { Order } from 'src/orders/order.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  quantity: number;

  @Column()
  category: string;

  @Column()
  price: string;

  @OneToMany(() => Order, (order) => order.product)
  orders: Order;

  @Column({ default: true })
  isActive: boolean;
}
