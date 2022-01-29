import { Body, Controller, Post } from '@nestjs/common';
import { User } from './user.entity';
import { UsersService } from './users.service';

@Controller('user')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('create')
  async createUser(
    @Body()
    values: {
      firstName: string;
      lastName: string;
      email: string;
      password: string;
    },
  ): Promise<void> {
    this.usersService.create(
      values.firstName,
      values.lastName,
      values.email,
      values.password,
    );
  }
}
