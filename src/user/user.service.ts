import { Injectable } from '@nestjs/common';
import { UserDetails } from 'src/clue/user.interface';
@Injectable()
export class UserService {private allUsers:UserDetails[] = []; // Array to store users

createUser(newUser: UserDetails): UserDetails {
    newUser.id = this.allUsers.length + 1; // Assign an ID (this is just for demonstration)
    this.allUsers.push(newUser); // Add the user to the array
    return newUser; // Return the created user
}
findAll(): UserDetails[] {
    return this.allUsers}
}
