import { BANK_ACCOUNT_TYPE } from '@app/config/constants';

export type BankAccountType = keyof typeof BANK_ACCOUNT_TYPE;

export type BankAccount = {
  id: string;
  color: string;
  currentBalance: number;
  initialBalance: number;
  name: string;
  type: BankAccountType;
};
