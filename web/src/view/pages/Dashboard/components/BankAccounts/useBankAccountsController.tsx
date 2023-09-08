import { useState } from 'react';

import { useWindowWidth } from '@app/hooks/useWindowWidth';

export function useBankAccountsController() {
  const [sliderState, setSliderState] = useState({ isBeginning: true, isEnd: false });

  const windowWidth = useWindowWidth();

  return { sliderState, setSliderState, windowWidth };
}
