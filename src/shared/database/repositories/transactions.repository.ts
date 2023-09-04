import { Injectable } from '@nestjs/common';
import { type Prisma } from '@prisma/client';

import { PrismaService } from '../prisma.service';

@Injectable()
export class TransactionsRepository {
  constructor(private readonly prismaService: PrismaService) {}

  findMany(findManyArgs: Prisma.TransactionFindManyArgs) {
    return this.prismaService.transaction.findMany(findManyArgs);
  }

  findFirst(findFirstArgs: Prisma.TransactionFindFirstArgs) {
    return this.prismaService.transaction.findFirst(findFirstArgs);
  }

  create(createArgs: Prisma.TransactionCreateArgs) {
    return this.prismaService.transaction.create(createArgs);
  }

  update(updateArgs: Prisma.TransactionUpdateArgs) {
    return this.prismaService.transaction.update(updateArgs);
  }

  delete(deleteArgs: Prisma.TransactionDeleteArgs) {
    return this.prismaService.transaction.delete(deleteArgs);
  }
}
