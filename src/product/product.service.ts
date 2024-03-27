import { Get, HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { productEntity } from '../entity/product.entity';

//Injectable Decorator: This tells NestJS that this class can be used as a service, which means it can provide functionality to other parts of our program.
@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(productEntity)
    private productRepository: Repository<productEntity>,
  ) {}

  //Add Product
  async addProduct(payload) {
    const add = await this.productRepository.create(payload);
    return this.productRepository.save(add);
  }

  //Get one product by name
  async findOneByName(name: string): Promise<productEntity> {
    const find = await this.productRepository.findOne({
      where: { name: name },
    });
    //error handling
    if (!find) {
      //this is the error to throw if no such product name is not found in the database
      throw new HttpException('Sorry, no such product found', 404); //And it'll be a 404 error, meaning "not found"
    }//else 
    return find;
  }

  //Get one Product by id
  async findOneById(id: number) {
    const find = await this.productRepository.findOne({ where: { id } });
    //error handling
    if (!find) {
      //this is the error to throw if no such product id is not found in the database
      throw new HttpException('Sorry, no such product found', 404); //And it'll be a 404 error, meaning not found
    }
    return find;
  }   
 
  //Delete by id (Sir Fred's method)
  async deleteById(id: number) {
    const find = await this.productRepository.findOne({ where: { id } });
    //error handling
    if (!find) {
      //this is the error to throw if no such product id is not found in the database
      throw new HttpException('Sorry, no such product found', 404); //And it'll be a 404 error, meaning not found
    }
    await this.productRepository.delete(id);
    return {
      statusCode: 200,
      message: 'Product deleted successfully',
    };
  }

  //Delete a product by name
  async deleteProductByName(name: string): Promise<void> {
    const result = await this.productRepository.delete({ name });
    if (result.affected === 0) {
      throw new HttpException('Product not found', 404);
    }
  }

  //Find all products
  async findAll() {
    return await this.productRepository.find();
  }

  // Update a product by name
  async updateProductByName(
    name: string,
    payload: Partial<productEntity>,
  ): Promise<productEntity> {
    const product = await this.productRepository.findOne({ where: { name } });
    if (!product) {
      throw new HttpException('Product not found', 404);
    }
    // Merge the payload into the existing product entity
    Object.assign(product, payload);
    return this.productRepository.save(product);
  }

  //Update Product by id
  async updateProduct(id, payload) {
    const update = this.productRepository.findOne({ where: { id } });
    if (!update) {
      throw new HttpException('Product not found', 404);
    }
    const updatedProduct = await this.productRepository.update(id, payload);
    return {
      statusCode: 201,
      message: 'Product updated successfully',
      data: updatedProduct,
    };
  }
}
