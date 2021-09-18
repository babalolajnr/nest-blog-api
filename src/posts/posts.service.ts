import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './posts.entity';

@Injectable()
export class PostsService {
    constructor(@InjectRepository(Post) private postsRepository: Repository<Post>) { }

    async create(title: string, content: string): Promise<Post> {

        const newPost = this.postsRepository.create({ title, content });

        return this.postsRepository.save(newPost);
    }
}
