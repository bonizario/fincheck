import { type BankAccountType } from '@app/entities/BankAccount';
import { httpClient } from '../httpClient';

type UpdateBankAccountParams = {
  id: string;
  color: string;
  initialBalance: number;
  name: string;
  type: BankAccountType;
};

export async function update({ id, ...params }: UpdateBankAccountParams) {
  const { data } = await httpClient.put(`/bank-accounts/${id}`, params);

  return data;
}
