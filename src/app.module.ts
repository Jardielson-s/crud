import { Module } from '@nestjs/common';
import { UserModule } from './domain/users/user.module';
import { CoreModule } from './core/core.module';

@Module({
  imports: [{ global: true, module: CoreModule }, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
