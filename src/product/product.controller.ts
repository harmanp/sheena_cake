import { Controller, Get } from '@nestjs/common';
import { Product } from './product.entity';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private productsService: ProductService) {}

  @Get()
  getAllUsers(): Promise<Array<Product>> {
    return this.productsService.getAllProducts();
  }
}
