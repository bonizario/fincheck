import { TRANSACTION_TYPE } from '@app/config/constants';

export type TransactionType = keyof typeof TRANSACTION_TYPE;

export type Transaction = {
  id: string;
  bankAccountId: string;
  categoryId: string;
  category?: {
    id: string;
    icon: string;
    name: string;
  };
  date: string;
  name: string;
  type: TransactionType;
  value: number;
};
