import { useState } from 'react';

import { useWindowWidth } from '@app/hooks/useWindowWidth';
import { useDashboard } from '../DashboardContext/useDashboard';

export function useBankAccounts() {
  const [sliderState, setSliderState] = useState({ isBeginning: true, isEnd: false });

  const windowWidth = useWindowWidth();

  const { areValuesVisible, toggleValueVisibility, openNewBankAccountModal } = useDashboard();

  return {
    areValuesVisible,
    bankAccounts: [],
    isLoading: false,
    openNewBankAccountModal,
    setSliderState,
    sliderState,
    toggleValueVisibility,
    windowWidth,
  };
}
