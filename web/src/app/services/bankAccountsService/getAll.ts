import { type BankAccount } from '@app/entities/BankAccount';
import { httpClient } from '../httpClient';

type GetAllBankAccountsResponse = BankAccount[];

export async function getAll() {
  const { data } =
    await httpClient.get<GetAllBankAccountsResponse>('/bank-accounts');

  return data;
}
