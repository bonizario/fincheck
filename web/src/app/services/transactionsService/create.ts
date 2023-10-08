import { type TransactionType } from '@app/entities/Transaction';
import { httpClient } from '../httpClient';

type CreateTransactionParams = {
  bankAccountId: string;
  categoryId: string;
  date: string;
  name: string;
  type: TransactionType;
  value: number;
};

export async function create(params: CreateTransactionParams) {
  const { data } = await httpClient.post('/transactions', params);

  return data;
}
