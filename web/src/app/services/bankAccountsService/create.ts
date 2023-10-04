import { BankAccount } from '@app/types/BankAccount';
import { httpClient } from '../httpClient';

type BankAccountParams = BankAccount;

export async function create(params: BankAccountParams) {
  const { data } = await httpClient.post('/bank-accounts', params);

  return data;
}
