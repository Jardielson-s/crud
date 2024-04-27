import { Injectable } from '@nestjs/common';
import { RepositoryCore } from 'src/core/repositories/repositories-core.repository';
import { UserEntity } from '../entity/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserRepository extends RepositoryCore(UserEntity) {
  constructor(
    @InjectRepository(UserEntity)
    private repo: Pick<Repository<UserEntity>, 'save' | 'findOne' | 'create'>,
  ) {
    super();
  }
}
