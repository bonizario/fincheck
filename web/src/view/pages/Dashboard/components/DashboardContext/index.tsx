import { createContext, useCallback, useState } from 'react';

type TransactionType = 'income' | 'expense';

type DashboardContextValue = {
  areValuesVisible: boolean;
  closeNewBankAccountModal: () => void;
  closeNewTransactionModal: () => void;
  isNewBankAccountModalOpen: boolean;
  isNewTransactionModalOpen: boolean;
  newTransactionType: TransactionType | null;
  openNewBankAccountModal: () => void;
  openNewTransactionModal: (type: TransactionType) => void;
  toggleValueVisibility: () => void;
};

export const DashboardContext = createContext({} as DashboardContextValue);

export function DashboardProvider({ children }: { children: React.ReactNode }) {
  const [areValuesVisible, setAreValuesVisible] = useState(true);

  const [isNewBankAccountModalOpen, setIsNewBankAccountModalOpen] = useState(true);

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  const [newTransactionType, setNewTransactionType] = useState<TransactionType | null>(null);

  const toggleValueVisibility = useCallback(() => {
    setAreValuesVisible(prevState => !prevState);
  }, []);

  const openNewBankAccountModal = useCallback(() => {
    setIsNewBankAccountModalOpen(true);
  }, []);

  const closeNewBankAccountModal = useCallback(() => {
    setIsNewBankAccountModalOpen(false);
  }, []);

  const openNewTransactionModal = useCallback((type: TransactionType) => {
    setNewTransactionType(type);
    setIsNewTransactionModalOpen(true);
  }, []);

  const closeNewTransactionModal = useCallback(() => {
    setNewTransactionType(null);

    setIsNewTransactionModalOpen(false);
  }, []);

  return (
    <DashboardContext.Provider
      value={{
        areValuesVisible,
        closeNewBankAccountModal,
        closeNewTransactionModal,
        isNewBankAccountModalOpen,
        isNewTransactionModalOpen,
        newTransactionType,
        openNewBankAccountModal,
        openNewTransactionModal,
        toggleValueVisibility,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
}
