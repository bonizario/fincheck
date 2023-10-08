import { useMemo, useState } from 'react';

import { useBankAccounts } from '@app/hooks/useBankAccounts';
import { useWindowWidth } from '@app/hooks/useWindowWidth';
import { useDashboard } from '../DashboardContext/useDashboard';

export function useBankAccountsController() {
  const [sliderState, setSliderState] = useState({ isBeginning: true, isEnd: false });

  const windowWidth = useWindowWidth();

  const {
    areValuesVisible,
    toggleValueVisibility,
    openNewBankAccountModal,
    openEditBankAccountModal,
  } = useDashboard();

  const { bankAccounts, isFetching } = useBankAccounts();

  const currentBalance = useMemo(() => {
    return bankAccounts.reduce((total, bankAccount) => total + bankAccount.currentBalance, 0);
  }, [bankAccounts]);

  return {
    areValuesVisible,
    bankAccounts,
    currentBalance,
    isLoading: isFetching,
    openEditBankAccountModal,
    openNewBankAccountModal,
    setSliderState,
    sliderState,
    toggleValueVisibility,
    windowWidth,
  };
}
