import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  UpdateDateColumn,
  CreateDateColumn,
} from 'typeorm';
import { User } from 'src/users/user.entity';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  content: string;

  @Column({ default: 0 })
  likes: number;

  @Column({ default: false })
  published: boolean;

  // eslint-disable-next-line prettier/prettier
  @ManyToOne(() => User, user => user.posts)
  user: User;

  @CreateDateColumn()
  created_on: Date;

  @UpdateDateColumn()
  updated_on: Date;
}
