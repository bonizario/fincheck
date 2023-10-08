import { createContext, useCallback, useState } from 'react';

import { type BankAccount } from '@app/entities/BankAccount';
import { type TransactionType } from '@app/entities/Transaction';

type DashboardContextValue = {
  areValuesVisible: boolean;
  bankAccountBeingEdited: BankAccount | null;
  closeEditBankAccountModal: () => void;
  closeNewBankAccountModal: () => void;
  closeNewTransactionModal: () => void;
  isEditBankAccountModalOpen: boolean;
  isNewBankAccountModalOpen: boolean;
  isNewTransactionModalOpen: boolean;
  newTransactionType: TransactionType | null;
  openEditBankAccountModal: (bankAccount: BankAccount) => void;
  openNewBankAccountModal: () => void;
  openNewTransactionModal: (type: TransactionType) => void;
  toggleValueVisibility: () => void;
};

export const DashboardContext = createContext<DashboardContextValue | null>(null);

export function DashboardProvider({ children }: { children: React.ReactNode }) {
  const [areValuesVisible, setAreValuesVisible] = useState(true);

  const [isNewBankAccountModalOpen, setIsNewBankAccountModalOpen] = useState(false);

  const [isEditBankAccountModalOpen, setIsEditBankAccountModalOpen] = useState(false);

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  const [newTransactionType, setNewTransactionType] = useState<TransactionType | null>(null);

  const [bankAccountBeingEdited, setBankAccountBeingEdited] = useState<BankAccount | null>(null);

  const toggleValueVisibility = useCallback(() => {
    setAreValuesVisible(prevState => !prevState);
  }, []);

  const openEditBankAccountModal = useCallback((bankAccount: BankAccount) => {
    setBankAccountBeingEdited(bankAccount);
    setIsEditBankAccountModalOpen(true);
  }, []);

  const closeEditBankAccountModal = useCallback(() => {
    setBankAccountBeingEdited(null);
    setIsEditBankAccountModalOpen(false);
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
        bankAccountBeingEdited,
        closeEditBankAccountModal,
        closeNewBankAccountModal,
        closeNewTransactionModal,
        isEditBankAccountModalOpen,
        isNewBankAccountModalOpen,
        isNewTransactionModalOpen,
        newTransactionType,
        openEditBankAccountModal,
        openNewBankAccountModal,
        openNewTransactionModal,
        toggleValueVisibility,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
}
