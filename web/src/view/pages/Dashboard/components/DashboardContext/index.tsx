import { createContext, useCallback, useState } from 'react';

type DashboardContextValue = {
  areValuesVisible: boolean;
  closeNewBankAccountModal: () => void;
  isNewBankAccountModalOpen: boolean;
  openNewBankAccountModal: () => void;
  toggleValueVisibility: () => void;
};

export const DashboardContext = createContext({} as DashboardContextValue);

export function DashboardProvider({ children }: { children: React.ReactNode }) {
  const [areValuesVisible, setAreValuesVisible] = useState(true);

  const [isNewBankAccountModalOpen, setIsNewBankAccountModalOpen] = useState(true);

  const toggleValueVisibility = useCallback(() => {
    setAreValuesVisible(prevState => !prevState);
  }, []);

  const openNewBankAccountModal = useCallback(() => {
    setIsNewBankAccountModalOpen(true);
  }, []);

  const closeNewBankAccountModal = useCallback(() => {
    setIsNewBankAccountModalOpen(false);
  }, []);

  return (
    <DashboardContext.Provider
      value={{
        areValuesVisible,
        closeNewBankAccountModal,
        isNewBankAccountModalOpen,
        openNewBankAccountModal,
        toggleValueVisibility,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
}
