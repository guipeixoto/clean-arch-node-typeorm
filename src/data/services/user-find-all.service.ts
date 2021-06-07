import { UserFindAllGateway } from '@/data/gateways';
import { User } from '@/domain/models';
import { UserFindAllUseCase } from '@/domain/usecases';

export class UserFindAllService implements UserFindAllUseCase {
  constructor(private readonly userFindAllGateway: UserFindAllGateway) {}

  async run(): Promise<User[]> {
    return this.userFindAllGateway.findAll();
  }
}
