import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductDto } from 'src/dto/product.dto';
import { productEntity } from 'src/entity/product.entity';

@Controller('product')
export class ProductController {
  constructor(private readonly prodservice: ProductService) {}
  @Post('add')
  async createProduct(@Body() payload: ProductDto) {
    return await this.prodservice.addProduct(payload)
  }
  @Get(':id')
  async findById(@Param('id') id:number) {
  return await this.prodservice.findOneById(id)
  }
  @Get(':name')
  async findName(@Param('name') name:string) {
  return await this.prodservice.findOneByName(name)
  }

  
  @Get()
  findAllProduct(){
    return this.prodservice.findAll()
  }
}
