import { type TransactionType } from '@app/entities/Transaction';
import { httpClient } from '../httpClient';

type UpdateTransactionParams = {
  id: string;
  bankAccountId: string;
  categoryId: string;
  date: string;
  name: string;
  type: TransactionType;
  value: number;
};

export async function update({ id, ...params }: UpdateTransactionParams) {
  const { data } = await httpClient.put(`/transactions/${id}`, params);

  return data;
}
