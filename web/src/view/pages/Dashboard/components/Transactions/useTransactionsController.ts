import { useState } from 'react';

import { useTransactions } from '@app/hooks/useTransactions';
import { GetAllTransactionsFilters } from '@app/services/transactionsService/getAll';
import { useDashboard } from '../DashboardContext/useDashboard';

export function useTransactionsController() {
  const [filters, setFilters] = useState<GetAllTransactionsFilters>({
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
  });

  const { areValuesVisible } = useDashboard();

  const [isFiltersModalOpen, setIsFiltersModalOpen] = useState(false);

  const { transactions, isFetching, isInitialLoading } = useTransactions(filters);

  function handleChangeFilters<T extends keyof GetAllTransactionsFilters>(filter: T) {
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

  return {
    areValuesVisible,
    filters,
    handleChangeFilters,
    handleCloseFiltersModal,
    handleOpenFiltersModal,
    isFiltersModalOpen,
    isInitialLoading,
    isLoading: isFetching,
    transactions,
  };
}
