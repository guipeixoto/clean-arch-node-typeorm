import { UserSaveGateway } from '@/data/gateways';
import { User } from '@/domain/models';
import { UserSaveUseCase } from '@/domain/usecases';

export class UserSaveService implements UserSaveUseCase {
  constructor(private readonly userSaveGateway: UserSaveGateway) {}

  async run(user: User): Promise<User> {
    return this.userSaveGateway.save(user);
  }
}
