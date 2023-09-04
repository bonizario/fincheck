import { Injectable } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { TransactionsRepository } from 'src/shared/database/repositories/transactions.repository';

@Injectable()
export class TransactionsService {
  constructor(private readonly transactionsRepository: TransactionsRepository) {}

  create(createTransactionDto: CreateTransactionDto) {
    return `This action adds a new transaction ${createTransactionDto}`;
  }

  findAllByUserId(userId: string) {
    return this.transactionsRepository.findMany({
      where: {
        userId,
      },
    });
  }

  update(transactionId: string, updateTransactionDto: UpdateTransactionDto) {
    return `This action updates a #${transactionId} transaction ${updateTransactionDto}`;
  }

  remove(transactionId: string) {
    return `This action removes a #${transactionId} transaction`;
  }
}
