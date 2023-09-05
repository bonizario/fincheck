import { Injectable } from '@nestjs/common';
import { CreateTransactionDto } from '../dto/create-transaction.dto';
import { UpdateTransactionDto } from '../dto/update-transaction.dto';
import { TransactionsRepository } from 'src/shared/database/repositories/transactions.repository';
import { ValidateBankAccountOwnershipService } from 'src/modules/bank-accounts/services/validate-bank-account-ownership.service';
import { ValidateCategoryOwnershipService } from 'src/modules/categories/services/validate-category-ownership.service';
import { ValidateTransactionOwnershipService } from './validate-transaction-ownership.service';
import { TransactionType } from '../entities/transaction';

@Injectable()
export class TransactionsService {
  constructor(
    private readonly transactionsRepository: TransactionsRepository,
    private readonly validateBankAccountOwnershipService: ValidateBankAccountOwnershipService,
    private readonly validateCategoryOwnershipService: ValidateCategoryOwnershipService,
    private readonly validateTransactionOwnershipService: ValidateTransactionOwnershipService
  ) {}

  async create(userId: string, createTransactionDto: CreateTransactionDto) {
    const { bankAccountId, categoryId, name, value, date, type } = createTransactionDto;

    await this.validateOwnership({ userId, bankAccountId, categoryId });

    return this.transactionsRepository.create({
      data: {
        userId,
        bankAccountId,
        categoryId,
        name,
        value,
        date,
        type,
      },
    });
  }

  findAllByUserId(
    userId: string,
    filters: { month: number; year: number; bankAccountId?: string; type?: TransactionType }
  ) {
    return this.transactionsRepository.findMany({
      where: {
        userId,
        bankAccountId: filters.bankAccountId,
        type: filters.type,
        date: {
          gte: new Date(Date.UTC(filters.year, filters.month)),
          lt: new Date(Date.UTC(filters.year, filters.month + 1)),
        },
      },
    });
  }

  async update(userId: string, transactionId: string, updateTransactionDto: UpdateTransactionDto) {
    const { bankAccountId, categoryId, name, value, date, type } = updateTransactionDto;

    await this.validateOwnership({ userId, bankAccountId, categoryId, transactionId });

    return this.transactionsRepository.update({
      where: {
        id: transactionId,
      },
      data: {
        bankAccountId,
        categoryId,
        name,
        value,
        date,
        type,
      },
    });
  }

  async remove(userId: string, transactionId: string) {
    await this.validateOwnership({ userId, transactionId });

    await this.transactionsRepository.delete({
      where: {
        id: transactionId,
      },
    });

    return null;
  }

  private async validateOwnership({
    userId,
    bankAccountId,
    categoryId,
    transactionId,
  }: {
    userId: string;
    bankAccountId?: string;
    categoryId?: string;
    transactionId?: string;
  }) {
    return Promise.all([
      transactionId && this.validateTransactionOwnershipService.validate(userId, transactionId),
      bankAccountId && this.validateBankAccountOwnershipService.validate(userId, bankAccountId),
      categoryId && this.validateCategoryOwnershipService.validate(userId, categoryId),
    ]);
  }
}
