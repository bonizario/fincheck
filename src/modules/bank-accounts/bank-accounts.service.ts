import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBankAccountDto } from './dto/create-bank-account.dto';
import { UpdateBankAccountDto } from './dto/update-bank-account.dto';
import { BankAccountsRepository } from 'src/shared/database/repositories/bank-accounts.repository';

@Injectable()
export class BankAccountsService {
  constructor(private readonly bankAccountsRepository: BankAccountsRepository) {}

  create(userId: string, createBankAccountDto: CreateBankAccountDto) {
    const { name, initialBalance, color, type } = createBankAccountDto;

    return this.bankAccountsRepository.create({
      data: {
        userId,
        name,
        color,
        initialBalance,
        type,
      },
    });
  }

  findAllByUserId(userId: string) {
    return this.bankAccountsRepository.findMany({
      where: {
        userId,
      },
    });
  }

  async update(userId: string, bankAccountId: string, updateBankAccountDto: UpdateBankAccountDto) {
    await this.validateBankAccountOwnership(userId, bankAccountId);

    const { name, color, initialBalance, type } = updateBankAccountDto;

    return this.bankAccountsRepository.update({
      where: {
        id: bankAccountId,
      },
      data: {
        name,
        color,
        initialBalance,
        type,
      },
    });
  }

  async remove(userId: string, bankAccountId: string) {
    await this.validateBankAccountOwnership(userId, bankAccountId);

    await this.bankAccountsRepository.delete({
      where: {
        id: bankAccountId,
      },
    });

    return null;
  }

  private async validateBankAccountOwnership(userId: string, bankAccountId: string) {
    const isBankAccountOwnedByUser = await this.bankAccountsRepository.findFirst({
      where: {
        id: bankAccountId,
        userId,
      },
    });

    if (!isBankAccountOwnedByUser) {
      throw new NotFoundException();
    }
  }
}
