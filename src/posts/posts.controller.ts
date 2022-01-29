import { Body, Controller, Post, Req } from '@nestjs/common';
import { PostsService } from './posts.service';

@Controller('post')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post('create')
  async create(
    @Body() values: { title: string; content: string },
  ): Promise<any> {
    const post = await this.postsService.create(values.title, values.content);

    return post;
  }
}
