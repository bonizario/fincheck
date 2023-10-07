import { BankAccountType } from '@app/types/BankAccount';
import { httpClient } from '../httpClient';

type BankAccount = {
  id: string;
  color: string;
  currentBalance: number;
  initialBalance: number;
  name: string;
  type: BankAccountType;
};

type GetAllBankAccountsResponse = BankAccount[];

export async function getAll() {
  const { data } = await httpClient.get<GetAllBankAccountsResponse>('/bank-accounts');

  return data;
}
