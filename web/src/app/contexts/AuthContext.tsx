import { createContext, useCallback, useState } from 'react';

import { localStorageKeys } from '../config/localStorageKeys';

type AuthContextValue = {
  signedIn: boolean;
  signIn: (accessToken: string) => void;
};

export const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [signedIn, setSignedIn] = useState<boolean>(() => {
    const storedAccessToken = localStorage.getItem(localStorageKeys.ACCESS_TOKEN);

    return !!storedAccessToken;
  });

  const signIn = useCallback((accessToken: string) => {
    localStorage.setItem(localStorageKeys.ACCESS_TOKEN, accessToken);

    setSignedIn(true);
  }, []);

  return <AuthContext.Provider value={{ signedIn, signIn }}>{children}</AuthContext.Provider>;
}
