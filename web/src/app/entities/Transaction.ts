export type TransactionType = 'INCOME' | 'EXPENSE';

export type Transaction = {
  id: string;
  bankAccountId: string;
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
