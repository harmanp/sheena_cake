import { Controller, Get } from '@nestjs/common';
import { Order } from './order.entity';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private ordersService: OrdersService) {}

  @Get()
  getAllOrders(): Promise<Array<Order>> {
    return this.ordersService.getAllOrders();
  }
}
