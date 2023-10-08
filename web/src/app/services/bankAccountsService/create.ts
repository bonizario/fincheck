import { type BankAccountType } from '@app/entities/BankAccount';
import { httpClient } from '../httpClient';

type CreateBankAccountParams = {
  color: string;
  initialBalance: number;
  name: string;
  type: BankAccountType;
};

export async function create(params: CreateBankAccountParams) {
  const { data } = await httpClient.post('/bank-accounts', params);

  return data;
}
