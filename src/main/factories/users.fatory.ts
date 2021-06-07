import { getRepository } from 'typeorm';
import { UserFindAllService, UserSaveService } from '@/data/services';
import { UserEndpoint } from '@/entrypoint/endpoints';
import { UserRepository } from '@/infra/providers/database/typeorm/repositories';
import { UserEntity } from '@/infra/providers/database/typeorm/entities';

export const makeUsersEndpoint = (): UserEndpoint => {
  const repository = getRepository(UserEntity);
  const provider = new UserRepository(repository);
  const userFindAllService = new UserFindAllService(provider);
  const userSaveService = new UserSaveService(provider);
  return new UserEndpoint(userFindAllService, userSaveService);
};
