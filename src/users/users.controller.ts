import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('user')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('register')
  async register(
    @Body()
    values: {
      firstName: string;
      lastName: string;
      email: string;
      password: string;
    },
  ): Promise<void> {
    this.usersService.register(
      values.firstName,
      values.lastName,
      values.email,
      values.password,
    );
  }
}
