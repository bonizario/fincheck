export const MONTHS = [
  'Jan',
  'Fev',
  'Mar',
  'Abr',
  'Mai',
  'Jun',
  'Jul',
  'Ago',
  'Set',
  'Out',
  'Nov',
  'Dez',
] as const;

export const LOCAL_STORAGE_KEYS = {
  ACCESS_TOKEN: 'fincheck:accessToken',
} as const;

export const BANK_ACCOUNT_TYPE = {
  CASH: 'Dinheiro Físico',
  CHECKING: 'Conta Corrente',
  INVESTMENT: 'Investimentos',
} as const;

export const TRANSACTION_TYPE = {
  INCOME: 'Receita',
  EXPENSE: 'Despesa',
} as const;
