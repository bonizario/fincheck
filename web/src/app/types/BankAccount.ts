export const BANK_ACCOUNT_TYPE = ['CASH', 'CHECKING', 'INVESTMENT'] as const;

export type BankAccountType = (typeof BANK_ACCOUNT_TYPE)[number];

export type BankAccount = {
  color: string;
  balance: number;
  name: string;
  type: BankAccountType;
};
