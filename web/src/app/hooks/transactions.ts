import { useQuery } from '@tanstack/react-query';

import { transactionsService } from '@app/services/transactionsService';
import { GetAllTransactionsFilters } from '@app/services/transactionsService/getAll';

export function useTransactions(filters: GetAllTransactionsFilters) {
  const {
    data: transactions,
    isFetching: isFetchingTransactions,
    isInitialLoading,
    refetch: refetchTransactions,
  } = useQuery({
    queryKey: ['transactions', filters],
    queryFn: () => transactionsService.getAll(filters),
    staleTime: Infinity,
  });

  return {
    transactions: transactions ?? [],
    isFetchingTransactions,
    isInitialLoading,
    refetchTransactions,
  };
}
