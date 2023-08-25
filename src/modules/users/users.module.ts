import { Module } from '@nestjs/common';

import { PrismaService } from 'src/shared/database/prisma.service';
import { UsersRepository } from '../../shared/database/repositories/users.repository';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, UsersRepository, PrismaService],
})
export class UsersModule {}
