import { useContext } from 'react';

import { DashboardContext } from '.';

export function useDashboard() {
  const dashboardState = useContext(DashboardContext);

  if (dashboardState === null) {
    throw new Error('Dashboard State has not yet been configured, and the value is null');
  }

  if (dashboardState === undefined) {
    throw new Error('Attempt to access Dashboard State outside of the Dashboard Context Provider');
  }

  return dashboardState;
}
