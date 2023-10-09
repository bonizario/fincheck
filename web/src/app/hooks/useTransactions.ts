import { useQuery } from '@tanstack/react-query';

import { transactionsService } from '@app/services/transactionsService';
import { GetAllTransactionsFilters } from '@app/services/transactionsService/getAll';

export function useTransactions(filters: GetAllTransactionsFilters) {
  const { data, isFetching, isInitialLoading, refetch } = useQuery({
    queryKey: ['transactions', filters],
    queryFn: () => transactionsService.getAll(filters),
    staleTime: Infinity,
  });

  return { transactions: data ?? [], isFetching, isInitialLoading, refetchTransactions: refetch };
}
