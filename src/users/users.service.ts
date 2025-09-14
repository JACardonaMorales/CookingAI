// src/users/users.service.ts
import { Injectable, ConflictException } from '@nestjs/common';
import { User } from './interfaces/user.interface';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    { id: 1, name: 'Alice', email: 'al@gmail.com', age: 28, isActive: true },
  ];

  findAll(): User[] {
    return this.users;
  }

  findOneByEmail(email: string): User | undefined {
    return this.users.find((user) => user.email === email);
  }

  create(createUserDto: CreateUserDto): User {
    // Verificamos si ya existe un usuario con ese email
    const existingUser = this.findOneByEmail(createUserDto.email);
    if (existingUser) {
      throw new ConflictException('User with this email already exists');
    }

    const newUser: User = {
      id: this.users.length + 1,
      isActive: true, // Por defecto, los nuevos usuarios están activos
      ...createUserDto,
    };

    this.users.push(newUser);
    return newUser;
  }
}