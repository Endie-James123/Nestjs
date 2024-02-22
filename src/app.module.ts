import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entity/user.entity';
import { DatabaseModule } from './database/database.module';
@Module({
  imports: [UserModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService, UserService],
})
export class AppModule {}
