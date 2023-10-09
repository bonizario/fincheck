import { useQuery } from '@tanstack/react-query';

import { bankAccountsService } from '@app/services/bankAccountsService';

export function useBankAccounts() {
  const { data, isFetching } = useQuery({
    queryKey: ['bank-accounts'],
    queryFn: bankAccountsService.getAll,
    staleTime: Infinity,
  });

  return { bankAccounts: data ?? [], isFetching };
}
