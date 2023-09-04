import { Injectable } from '@nestjs/common';
import { type Prisma } from '@prisma/client';

import { PrismaService } from '../prisma.service';

@Injectable()
export class UsersRepository {
  constructor(private readonly prismaService: PrismaService) {}

  create(createArgs: Prisma.UserCreateArgs) {
    return this.prismaService.user.create(createArgs);
  }

  findUnique(findUniqueArgs: Prisma.UserFindUniqueArgs) {
    return this.prismaService.user.findUnique(findUniqueArgs);
  }
}
