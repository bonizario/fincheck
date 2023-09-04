import { Injectable } from '@nestjs/common';
import { type Prisma } from '@prisma/client';

import { PrismaService } from '../prisma.service';

@Injectable()
export class CategoriesRepository {
  constructor(private readonly prismaService: PrismaService) {}

  findMany(findManyArgs: Prisma.CategoryFindManyArgs) {
    return this.prismaService.category.findMany(findManyArgs);
  }
}
