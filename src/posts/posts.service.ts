import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/user.entity';
import { getRepository, Repository } from 'typeorm';
import { CreatePostDto } from './create-post.dto';
import { Post } from './posts.entity';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post) private postsRepository: Repository<Post>,
  ) {}

  async create(post: CreatePostDto, user): Promise<any> {
    const userRepository = getRepository(User);

    const author = await userRepository.findOne({
      where: { email: 'babalolajnr@gmail.com' },
    });

    const newPost: Post = new Post();

    newPost.content = post.content;
    newPost.title = post.title;
    newPost.user = author;

    return this.postsRepository
      .save(post)
      .catch((e) => {
        return e;
      })
      .then((post) => {
        return post;
      });
  }
}
