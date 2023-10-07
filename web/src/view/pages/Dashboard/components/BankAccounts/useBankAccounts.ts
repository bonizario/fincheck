import { useQuery } from '@tanstack/react-query';
import { useMemo, useState } from 'react';

import { useWindowWidth } from '@app/hooks/useWindowWidth';
import { bankAccountsService } from '@app/services/bankAccountsService';
import { useDashboard } from '../DashboardContext/useDashboard';

export function useBankAccounts() {
  const [sliderState, setSliderState] = useState({ isBeginning: true, isEnd: false });

  const windowWidth = useWindowWidth();

  const { areValuesVisible, toggleValueVisibility, openNewBankAccountModal } = useDashboard();

  const { data: bankAccounts, isFetching } = useQuery({
    queryKey: ['bankAccounts'],
    queryFn: bankAccountsService.getAll,
  });

  const currentBalance = useMemo(() => {
    if (!bankAccounts) {
      return 0;
    }
    return bankAccounts.reduce((total, bankAccount) => total + bankAccount.currentBalance, 0);
  }, [bankAccounts]);

  return {
    areValuesVisible,
    bankAccounts: bankAccounts ?? [],
    currentBalance,
    isLoading: isFetching,
    openNewBankAccountModal,
    setSliderState,
    sliderState,
    toggleValueVisibility,
    windowWidth,
  };
}
