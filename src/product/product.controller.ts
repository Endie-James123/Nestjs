import { Body, Controller, Get, Param, Post, Delete, Patch, Put } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductDto } from 'src/dto/product.dto';
import { productEntity } from 'src/entity/product.entity';
import { identity } from 'rxjs';

@Controller('product')
export class ProductController {
  //The logic written in the product service is now passed this variable called prodservice
  constructor(private readonly prodservice: ProductService) {}

  //Create Product route
  @Post('add')
  async createProduct(@Body() payload: ProductDto) {
    return await this.prodservice.addProduct(payload);
  }

  //update Product route (sir fred's method)
  @Put(':id')
  async updateProductByid(@Param('id')id, @Body()Payload){
    return await this.prodservice.updateProduct(id,Payload);
  }

  //Delete by id (Sir Fred's Method)
  @Delete(':id')
  async deleteProductById(@Param('id')id:number){
  return await this.prodservice.deleteById(id)
  }



   @Delete('deleteProduct/:name')
  async deleteProductByName(@Param('name') name: string): Promise<void> {
    await this.prodservice.deleteProductByName(name);
  }

   //Update product by name
  @Patch('updateProduct/:name')
  async updateProductByName(@Param('name') name: string, @Body() payload: Partial<productEntity>) {
    return await this.prodservice.updateProductByName(name, payload);
  }
  //Get product by name
  @Get('getByName/:name')
  async findName(@Param('name') name: string) {
    return await this.prodservice.findOneByName(name);
  }

  //Get Product by Id
  @Get('getbyId/:id')
  async findById(@Param('id') id: number) {
    return await this.prodservice.findOneById(id);
  }
  //Get all products
  @Get()
  findAllProduct() {
    return this.prodservice.findAll();
  }
}
