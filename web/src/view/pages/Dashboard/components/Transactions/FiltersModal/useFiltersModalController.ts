import { useState } from 'react';

import { useGetAllBankAccounts } from '@app/hooks/bankAccounts';

export function useFiltersModalController() {
  const [selectedBankAccountId, setSelectedBankAccountId] = useState<string>();

  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  const { bankAccounts } = useGetAllBankAccounts();

  function handleSelectBankAccount(bankAccountId: string) {
    setSelectedBankAccountId(prevId =>
      prevId === bankAccountId ? undefined : bankAccountId
    );
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
