import { Controller, Get } from '@nestjs/common';

interface User {
  id: number;
  name: string;
  email: string;
  age: number;
  isActive: boolean;
}

@Controller('users')
export class UsersController {
    private users: User[] = [
        { id: 1, name: 'Alice', email: 'al@gmail.com', age: 28, isActive: true },
    ];    
    

    @Get()
    getUsers(): User[] {
        return this.users;
    }
}