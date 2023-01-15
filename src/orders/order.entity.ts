import { Product } from 'src/product/product.entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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

  @OneToMany((type) => Product, (product) => product.order)
  product: Product[];

  @Column({ default: true })
  isActive: boolean;
}
