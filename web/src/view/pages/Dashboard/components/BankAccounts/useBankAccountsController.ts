import { useEffect, useMemo, useState } from 'react';

import { useGetAllBankAccounts } from '@app/hooks/bankAccounts';
import { useWindowWidth } from '@app/hooks/useWindowWidth';
import { useDashboard } from '../DashboardContext/useDashboard';

export function useBankAccountsController() {
  const [sliderState, setSliderState] = useState({
    isBeginning: true,
    isEnd: false,
  });

  const windowWidth = useWindowWidth();

  const {
    areValuesVisible,
    toggleValueVisibility,
    openNewBankAccountModal,
    openEditBankAccountModal,
  } = useDashboard();

  const { bankAccounts, isFetchingBankAccounts } = useGetAllBankAccounts();

  const currentBalance = useMemo(() => {
    return bankAccounts.reduce(
      (total, bankAccount) => total + bankAccount.currentBalance,
      0
    );
  }, [bankAccounts]);

  useEffect(() => {
    setSliderState({ isBeginning: true, isEnd: false });
  }, [bankAccounts]);

  return {
    areValuesVisible,
    bankAccounts,
    currentBalance,
    isLoading: isFetchingBankAccounts,
    openEditBankAccountModal,
    openNewBankAccountModal,
    setSliderState,
    sliderState,
    toggleValueVisibility,
    windowWidth,
  };
}
