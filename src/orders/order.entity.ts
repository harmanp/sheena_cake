import { Product } from 'src/product/product.entity';
import { User } from 'src/users/user.entity';

import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  orderNumber: string;

  @Column()
  deliveryDate: string;

  @Column()
  quantity: number;

  @ManyToOne(() => Product, (product) => product.orders)
  product: Product[];

  @ManyToOne(() => User, (user) => user.orders)
  user: User;

  @Column({ default: true })
  isActive: boolean;
}
