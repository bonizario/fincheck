import { useState } from 'react';

export function useFiltersModalController() {
  const [selectedBankAccountId, setSelectedBankAccountId] = useState<string | null>(null);

  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  function handleSelectBankAccount(bankAccountId: string) {
    setSelectedBankAccountId(prevId => (prevId === bankAccountId ? null : bankAccountId));
  }

  function handleChangeYear(step: number) {
    setSelectedYear(prevYear => prevYear + step);
  }

  return { handleChangeYear, handleSelectBankAccount, selectedBankAccountId, selectedYear };
}
