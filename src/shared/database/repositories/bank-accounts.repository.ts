import { Injectable } from '@nestjs/common';
import { type Prisma } from '@prisma/client';

import { PrismaService } from '../prisma.service';

@Injectable()
export class BankAccountsRepository {
  constructor(private readonly prismaService: PrismaService) {}

  create(createArgs: Prisma.BankAccountCreateArgs) {
    return this.prismaService.bankAccount.create(createArgs);
  }

  findMany(findManyArgs: Prisma.BankAccountFindManyArgs) {
    return this.prismaService.bankAccount.findMany(findManyArgs);
  }

  findUnique(findUniqueArgs: Prisma.BankAccountFindUniqueArgs) {
    return this.prismaService.bankAccount.findUnique(findUniqueArgs);
  }
}
