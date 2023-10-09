import { useContext } from 'react';

import { AuthContext } from '../contexts/AuthContext';

export function useAuth() {
  const authState = useContext(AuthContext);

  if (authState === null) {
    throw new Error('authState has not yet been configured, and the value is null');
  }

  if (authState === undefined) {
    throw new Error('Attempt to access authState outside of the AuthContext Provider');
  }

  return authState;
}
