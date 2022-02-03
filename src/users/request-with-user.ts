import { User } from './user.entity';

export type RequestWithUser = Request & { user: User };
