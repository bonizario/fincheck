import { httpClient } from '../httpClient';

export async function remove(transactionId: string) {
  await httpClient.delete(`/transactions/${transactionId}`);
}
