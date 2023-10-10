import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { transactionsService } from '@app/services/transactionsService';
import { GetAllTransactionsFilters } from '@app/services/transactionsService/getAll';

export function useGetAllTransactions(filters: GetAllTransactionsFilters) {
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
    isFetchingTransactions,
    isInitialLoading,
    refetchTransactions,
    transactions: transactions ?? [],
  };
}

export function useCreateTransaction() {
  const queryClient = useQueryClient();

  const { isLoading: isCreatingTransaction, mutateAsync: createTransaction } =
    useMutation({
      mutationFn: transactionsService.create,
      onSuccess: () => {
        queryClient.invalidateQueries(['transactions']);
        queryClient.invalidateQueries(['bank-accounts']);
      },
    });

  return { isCreatingTransaction, createTransaction };
}

export function useUpdateTransaction() {
  const queryClient = useQueryClient();

  const { isLoading: isUpdatingTransaction, mutateAsync: updateTransaction } =
    useMutation({
      mutationFn: transactionsService.update,
      onSuccess: () => {
        queryClient.invalidateQueries(['transactions']);
        queryClient.invalidateQueries(['bank-accounts']);
      },
    });

  return { isUpdatingTransaction, updateTransaction };
}

export function useDeleteTransaction() {
  const queryClient = useQueryClient();

  const { isLoading: isDeletingTransaction, mutateAsync: deleteTransaction } =
    useMutation({
      mutationFn: transactionsService.remove,
      onSuccess: () => {
        queryClient.invalidateQueries(['transactions']);
        queryClient.invalidateQueries(['bank-accounts']);
      },
    });

  return { isDeletingTransaction, deleteTransaction };
}
