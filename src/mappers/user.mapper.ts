import { User } from '@/domain/models';
import { UserFindAllResponse, UserSaveResponse } from '@/entrypoint/responses';
import { UserEntity } from '@/infra/providers/database/typeorm/entities';

export class UserMapper {
  static modelToEntity(model: User): UserEntity {
    return {
      name: model.name,
      email: model.email,
      bornAt: model.bornAt,
    };
  }

  static entityToModel(entity: UserEntity): User {
    return {
      id: entity.id!,
      name: entity.name,
      email: entity.email,
      bornAt: entity.bornAt,
      createdAt: entity.createdAt!,
    };
  }

  static modelToFindAllResponse(model: User): UserFindAllResponse {
    return {
      id: model.id!,
      name: model.name,
      email: model.email,
      bornAt: model.bornAt.toString(),
      createdAt: model.createdAt!.toString(),
    };
  }

  static modelToSaveResponse(model: User): UserSaveResponse {
    return {
      id: model.id!,
      name: model.name,
      email: model.email,
      bornAt: model.bornAt.toString(),
      createdAt: model.createdAt!.toString(),
    };
  }
}
