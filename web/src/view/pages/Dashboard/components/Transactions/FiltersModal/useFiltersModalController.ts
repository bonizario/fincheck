import { useState } from 'react';

import { useBankAccounts } from '@app/hooks/useBankAccounts';

export function useFiltersModalController() {
  const [selectedBankAccountId, setSelectedBankAccountId] = useState<string | undefined>();

  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  const { bankAccounts } = useBankAccounts();

  function handleSelectBankAccount(bankAccountId: string) {
    setSelectedBankAccountId(prevId => (prevId === bankAccountId ? undefined : bankAccountId));
  }

  function handleChangeYear(step: number) {
    setSelectedYear(prevYear => prevYear + step);
  }

  return {
    bankAccounts,
    handleChangeYear,
    handleSelectBankAccount,
    selectedBankAccountId,
    selectedYear,
  };
}
