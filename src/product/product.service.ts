import { Get, HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../entity/user.entity';
import { Repository } from 'typeorm';
import { productEntity } from '../entity/product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(productEntity) private productRepository: Repository<productEntity>,
  ) {}
  async addProduct(payload){
    const add = await this.productRepository.create(payload)
    return this.productRepository.save(add);
    //it can also be done this way
    //const add = await this.productRepository.save
    //it'll create and save at once
  }

  async findOneByName(name:string):Promise<productEntity>{
    const find = await this.productRepository.findOne({where:{name:name}})
    //error handling
    if (!find){
      throw new HttpException('Sorry, no such product found', 400)
    }
    return find
  }
  
  //Get o
  async findOneById(id:number){
    const find = await this.productRepository.findOne({where:{id}})
    //error handling
    if (!find){
      throw new HttpException('Sorry, no such product found', 400)
    }
    return find
  }

  //Find all products
  async findAll(){
    return await this.productRepository.find()
  }
  
  
  }

  
  

