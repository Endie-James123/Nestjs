//Imported functions from class-validator (a dependency)
import { IsEmail, IsInt, IsNotEmpty, IsPositive, } from 'class-validator';
export class UserDetails {
    
  @IsPositive()
  @IsInt()
  id: number;

  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  isRobot: boolean;
}
