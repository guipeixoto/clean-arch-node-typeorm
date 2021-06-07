import { User } from '@/domain/models';

export interface UserSaveUseCase {
  run: (user: User) => Promise<User>;
}
