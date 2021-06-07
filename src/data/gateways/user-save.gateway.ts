import { User } from '@/domain/models';

export interface UserSaveGateway {
  save: (user: User) => Promise<User>;
}
