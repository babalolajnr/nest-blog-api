import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreatePostDto } from './create-post.dto';
import { PostsService } from './posts.service';
import { RequestWithUser } from '../users/request-with-user';
@Controller('post')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @UseGuards(JwtAuthGuard)
  @Post('create')
  async create(
    @Body() createPostDto: CreatePostDto,
    @Req() request: RequestWithUser,
  ): Promise<any> {
    const post = await this.postsService.create(createPostDto, request.user);
    return post;
  }
}
