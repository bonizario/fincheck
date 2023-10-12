import { useState } from 'react';

import { type Transaction } from '@app/entities/Transaction';
import { useGetAllTransactions } from '@app/hooks/transactions';
import { GetAllTransactionsFilters } from '@app/services/transactionsService/getAll';
import { useDashboard } from '../DashboardContext/useDashboard';

export function useTransactionsController() {
  const [filters, setFilters] = useState<GetAllTransactionsFilters>({
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
  });

  const [isFiltersModalOpen, setIsFiltersModalOpen] = useState(false);

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const [transactionBeingEdited, setTransactionBeingEdited] =
    useState<Transaction | null>(null);

  const { areValuesVisible } = useDashboard();

  const { transactions, isFetchingTransactions } =
    useGetAllTransactions(filters);

  function handleChangeFilters<T extends keyof GetAllTransactionsFilters>(
    filter: T
  ) {
    return (value: GetAllTransactionsFilters[T]) => {
      setFilters(prevFilter => ({
        ...prevFilter,
        [filter]: value,
      }));
    };
  }

  function handleOpenFiltersModal() {
    setIsFiltersModalOpen(true);
  }

  function handleCloseFiltersModal() {
    setIsFiltersModalOpen(false);
  }

  function handleOpenEditModal(transaction: Transaction) {
    setTransactionBeingEdited(transaction);
    setIsEditModalOpen(true);
  }

  function handleCloseEditModal() {
    setTransactionBeingEdited(null);
    setIsEditModalOpen(false);
  }

  function handleApplyFilters(filters: {
    bankAccountId: string | undefined;
    year: number;
  }) {
    handleChangeFilters('bankAccountId')(filters.bankAccountId);
    handleChangeFilters('year')(filters.year);
    handleCloseFiltersModal();
  }

  return {
    areValuesVisible,
    filters,
    handleApplyFilters,
    handleChangeFilters,
    handleCloseEditModal,
    handleCloseFiltersModal,
    handleOpenEditModal,
    handleOpenFiltersModal,
    isEditModalOpen,
    isFiltersModalOpen,
    isLoading: isFetchingTransactions,
    transactionBeingEdited,
    transactions,
  };
}
