import { Controller, Inject } from '@nestjs/common';

import { ControllerCore } from 'src/core/controllers/controller-core.controller';
import { UserService } from '../services/user.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { Bcrypt } from 'src/core/auth/bcrypt';
import { UserEntity } from '../entity/user.entity';
import { UserIdDto } from '../dto/user-id.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('users')
@ApiTags('user')
export class UserController extends ControllerCore<any, CreateUserDto>(
  UserEntity,
  CreateUserDto,
  UserIdDto,
) {
  constructor(
    @Inject(UserService) private readonly service: UserService,
    @Inject(Bcrypt) private readonly bcrypt: Bcrypt,
  ) {
    super();
  }

  async beforeCreate(createDto: CreateUserDto) {
    // const user = await this.service.findWhere({ email: createDto.email });
    // if (user) {
    //   throw new BadRequestException('Email already exist');
    // }

    return {
      ...createDto,
      password: this.bcrypt.sign(createDto.password),
    };
  }
}
