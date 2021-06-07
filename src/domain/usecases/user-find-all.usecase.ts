import { User } from '@/domain/models';

export interface UserFindAllUseCase {
  run: () => Promise<User[]>;
}
