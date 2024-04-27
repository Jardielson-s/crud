import { Module } from '@nestjs/common';
import { Bcrypt } from './auth/bcrypt';
import * as bcrypt from 'bcryptjs';
import { InfraModule } from './infra/infra.module';

@Module({
  imports: [InfraModule],
  exports: [Bcrypt, InfraModule],
  providers: [
    {
      provide: 'bcrypt',
      useValue: bcrypt,
    },
    Bcrypt,
    InfraModule,
  ],
})
export class CoreModule {}
