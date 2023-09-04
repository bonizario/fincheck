import { Injectable, NotFoundException } from '@nestjs/common';
import { BankAccountsRepository } from 'src/shared/database/repositories/bank-accounts.repository';

@Injectable()
export class ValidateBankAccountOwnershipService {
  constructor(private readonly bankAccountsRepository: BankAccountsRepository) {}

  async validate(userId: string, bankAccountId: string) {
    const isBankAccountOwnedByUser = await this.bankAccountsRepository.findFirst({
      where: {
        id: bankAccountId,
        userId,
      },
    });

    if (!isBankAccountOwnedByUser) {
      throw new NotFoundException('Bank account not found');
    }
  }
}
