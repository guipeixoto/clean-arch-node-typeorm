import { EntityRepository, Repository } from 'typeorm';

import { UserFindAllGateway } from '@/data/gateways';
import { UserSaveGateway } from '@/data/gateways/user-save.gateway';
import { UserEntity } from '@/infra/providers/database/typeorm/entities';
import { User } from '@/domain/models';
import { UserMapper } from '@/mappers/user.mapper';

@EntityRepository(UserEntity)
export class UserRepository implements UserFindAllGateway, UserSaveGateway {
  constructor(private readonly repository: Repository<UserEntity>) {}

  async findAll(): Promise<User[]> {
    return (await this.repository.find()).map(user =>
      UserMapper.entityToModel(user),
    );
  }

  async save(user: User): Promise<User> {
    const userSaved = await this.repository.save(
      UserMapper.modelToEntity(user),
    );

    return UserMapper.entityToModel(userSaved);
  }
}
