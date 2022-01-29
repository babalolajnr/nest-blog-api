import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  register(
    firstName: string,
    lastName: string,
    email: string,
    password: string,
  ): User {
    const user = this.usersRepository.create({
      firstName,
      lastName,
      email,
      password,
    });

    return user;
  }

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  async findOne(email: string): Promise<User | undefined> {
    return this.usersRepository.findOne(email);
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
