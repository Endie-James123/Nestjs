import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserDetails } from 'src/clue/user.interface';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('createUser')
  @UsePipes(new ValidationPipe())
  createUser(@Body() user: UserDetails): UserDetails {
    return this.userService.createUser(user);
  }
  @Get('getUser')
  findAll(): UserDetails[] {
    return this.userService.findAll();
  }
}
