import { User } from '@/domain/models';
import { UserFindAllUseCase, UserSaveUseCase } from '@/domain/usecases';
import { HttpResponse } from '@/entrypoint/constracts';
import { UserFindAllResponse, UserSaveResponse } from '@/entrypoint/responses';
import { UserMapper } from '@/mappers/user.mapper';

export class UserEndpoint {
  constructor(
    private readonly userFindAllUseCase: UserFindAllUseCase,
    private readonly userSaveUseCase: UserSaveUseCase,
  ) {}

  async findAll(): Promise<HttpResponse<UserFindAllResponse[]>> {
    const users = await this.userFindAllUseCase.run();

    return {
      statusCode: 200,
      data: users.map(user => UserMapper.modelToFindAllResponse(user)),
    };
  }

  async save(user: User): Promise<HttpResponse<UserSaveResponse>> {
    const result = await this.userSaveUseCase.run(user);

    return {
      statusCode: 201,
      data: UserMapper.modelToSaveResponse(result),
    };
  }
}
