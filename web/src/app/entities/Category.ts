import { type TransactionType } from './Transaction';

export type Category = {
  id: string;
  userId: string;
  icon: string;
  name: string;
  type: TransactionType;
};
