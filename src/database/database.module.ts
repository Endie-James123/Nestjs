import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductDto } from 'src/dto/product.dto';
import { productEntity } from 'src/entity/product.entity';
import { UserEntity } from 'src/entity/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'firstdatabase',
      entities: [productEntity],
      synchronize: true,
    }),
  ],
})
export class DatabaseModule {}
