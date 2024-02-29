import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { productEntity } from 'src/entity/product.entity';
import { UserEntity } from 'src/entity/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql', //This is your type of database
      host: 'localhost',
      port: 3306, //This is the port MySQL is listening to
      username: 'root',
      password: '', //If your database has a password, this is where you'll input it
      database: 'firstdatabase', //name of the database you created goes here
      entities: [productEntity], //Your Entities goes here
      synchronize: true, //When set to true watches if data is added, removed or updated and automatically updates it in the database
    }),
  ],
})
export class DatabaseModule {}
