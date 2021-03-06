import { Post } from 'src/posts/posts.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
  Unique,
} from 'typeorm';

@Entity()
@Unique('fullname', ['firstName', 'lastName'])
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ default: true })
  isActive: boolean;

  // eslint-disable-next-line prettier/prettier
  @OneToMany(() => Post, post => post.user)
  posts: Post[];

  @CreateDateColumn()
  created_on: Date;

  @UpdateDateColumn()
  updated_on: Date;
}
