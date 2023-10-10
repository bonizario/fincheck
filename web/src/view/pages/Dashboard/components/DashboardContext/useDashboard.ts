import { useContext } from 'react';

import { DashboardContext } from '.';

export function useDashboard() {
  const dashboardState = useContext(DashboardContext);

  if (dashboardState === null) {
    throw new Error(
      'dashboardState has not yet been configured, and the value is null'
    );
  }

  if (dashboardState === undefined) {
    throw new Error(
      'Attempt to access dashboardState outside of the DashboardContext Provider'
    );
  }

  return dashboardState;
}
