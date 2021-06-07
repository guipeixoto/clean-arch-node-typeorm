import { User } from '@/domain/models';

export interface UserFindAllGateway {
  findAll: () => Promise<User[]>;
}
