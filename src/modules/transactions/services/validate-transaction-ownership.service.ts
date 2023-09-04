import { Injectable, NotFoundException } from '@nestjs/common';
import { TransactionsRepository } from 'src/shared/database/repositories/transactions.repository';

@Injectable()
export class ValidateTransactionOwnershipService {
  constructor(private readonly transactionsRepository: TransactionsRepository) {}

  async validate(userId: string, transactionId: string) {
    const isTransactionOwnedByUser = await this.transactionsRepository.findFirst({
      where: {
        id: transactionId,
        userId,
      },
    });

    if (!isTransactionOwnedByUser) {
      throw new NotFoundException('Transaction not found');
    }
  }
}
