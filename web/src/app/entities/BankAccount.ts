export const BankAccountTypes = ['CASH', 'CHECKING', 'INVESTMENT'] as const;

export type BankAccountType = (typeof BankAccountTypes)[number];

export type BankAccount = {
  id: string;
  color: string;
  currentBalance: number;
  initialBalance: number;
  name: string;
  type: BankAccountType;
};
