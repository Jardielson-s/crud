import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from './database/config/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot(config)],
  exports: [TypeOrmModule.forRoot(config)],
})
export class InfraModule {}
