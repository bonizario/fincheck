import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { bankAccountsService } from '@app/services/bankAccountsService';

export function useGetAllBankAccounts() {
  const { data: bankAccounts, isFetching: isFetchingBankAccounts } = useQuery({
    queryKey: ['bank-accounts'],
    queryFn: bankAccountsService.getAll,
    staleTime: Infinity,
  });

  return { isFetchingBankAccounts, bankAccounts: bankAccounts ?? [] };
}

export function useCreateBankAccount() {
  const queryClient = useQueryClient();

  const { isLoading: isCreatingBankAccount, mutateAsync: createBankAccount } =
    useMutation({
      mutationFn: bankAccountsService.create,
      onSuccess: () => queryClient.invalidateQueries(['bank-accounts']),
    });

  return { isCreatingBankAccount, createBankAccount };
}

export function useUpdateBankAccount() {
  const queryClient = useQueryClient();

  const { isLoading: isUpdatingBankAccount, mutateAsync: updateBankAccount } =
    useMutation({
      mutationFn: bankAccountsService.update,
      onSuccess: () => queryClient.invalidateQueries(['bank-accounts']),
    });

  return { isUpdatingBankAccount, updateBankAccount };
}

export function useDeleteBankAccount() {
  const queryClient = useQueryClient();

  const { isLoading: isDeletingBankAccount, mutateAsync: deleteBankAccount } =
    useMutation({
      mutationFn: bankAccountsService.remove,
      onSuccess: () => queryClient.invalidateQueries(['bank-accounts']),
    });

  return { isDeletingBankAccount, deleteBankAccount };
}
