import { httpClient } from '../httpClient';

export async function remove(bankAccountId: string) {
  await httpClient.delete(`/bank-accounts/${bankAccountId}`);
}
