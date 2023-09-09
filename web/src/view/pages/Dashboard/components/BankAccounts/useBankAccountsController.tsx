import { useState } from 'react';

import { useWindowWidth } from '@app/hooks/useWindowWidth';
import { useDashboard } from '../DashboardContext/useDashboard';

export function useBankAccountsController() {
  const [sliderState, setSliderState] = useState({ isBeginning: true, isEnd: false });

  const windowWidth = useWindowWidth();

  const { areValuesVisible, toggleValueVisibility } = useDashboard();

  return {
    areValuesVisible,
    sliderState,
    setSliderState,
    windowWidth,
    toggleValueVisibility,
  };
}
