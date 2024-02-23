import { Module } from '@nestjs/common';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';
import { DatabaseModule } from './database/database.module';
import { UserController } from './user/user.controller';
@Module({
  imports: [UserModule, DatabaseModule],
  controllers: [UserController],
  providers: [UserService],
})
export class AppModule {}
