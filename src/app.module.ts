import { Module } from '@nestjs/common';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';
import { DatabaseModule } from './database/database.module';
import { UserController } from './user/user.controller';
import { ProductModule } from './product/product.module';
@Module({
  imports: [UserModule, DatabaseModule, ProductModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
