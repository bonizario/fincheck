import { TransactionType, type Transaction } from '@app/entities/Transaction';
import { httpClient } from '../httpClient';

type GetAllTransactionsResponse = Transaction[];

export type GetAllTransactionsFilters = {
  bankAccountId?: string;
  month: number;
  type?: TransactionType;
  year: number;
};

export async function getAll(filters: GetAllTransactionsFilters) {
  const { data } = await httpClient.get<GetAllTransactionsResponse>('/transactions', {
    params: filters,
  });

  return data;
}
