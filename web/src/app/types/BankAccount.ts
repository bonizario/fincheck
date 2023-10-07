export const BankAccountTypes = ['CASH', 'CHECKING', 'INVESTMENT'] as const;

export type BankAccountType = (typeof BankAccountTypes)[number];
