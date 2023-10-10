import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { z } from 'zod';

import { TRANSACTION_TYPE } from '@app/config/constants';
import { useGetAllBankAccounts } from '@app/hooks/bankAccounts';
import { useGetAllCategories } from '@app/hooks/categories';
import { transactionsService } from '@app/services/transactionsService';
import { useDashboard } from '../../components/DashboardContext/useDashboard';

const schema = z.object({
  value: z.string().trim().min(1, 'Valor é obrigatório'),
  name: z.string().trim().min(1, 'Nome é obrigatório'),
  categoryId: z.string().trim().min(1, 'Categoria é obrigatória'),
  bankAccountId: z.string().trim().min(1, 'Conta bancária é obrigatória'),
  date: z.date({ required_error: 'Data é obrigatória' }),
});

type FormData = z.infer<typeof schema>;

export function useNewTransactionModalController() {
  const {
    closeNewTransactionModal,
    isNewTransactionModalOpen,
    newTransactionType,
  } = useDashboard();

  const {
    control,
    formState: { errors },
    handleSubmit: hookFormSubmit,
    register,
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      value: '',
      name: '',
      categoryId: '',
      bankAccountId: '',
      date: new Date(),
    },
  });

  const queryClient = useQueryClient();

  const { bankAccounts } = useGetAllBankAccounts();

  const { categories: allCategories } = useGetAllCategories();

  const { isLoading, mutateAsync: createTransaction } = useMutation({
    mutationFn: transactionsService.create,
    onSuccess: () => {
      queryClient.invalidateQueries(['transactions']);
      queryClient.invalidateQueries(['bank-accounts']);
    },
  });

  const categories = useMemo(() => {
    return allCategories.filter(
      category => category.type === newTransactionType
    );
  }, [allCategories, newTransactionType]);

  function handleCloseNewTransactionModal() {
    closeNewTransactionModal();
    reset();
  }

  const handleSubmit = hookFormSubmit(async data => {
    try {
      await createTransaction({
        ...data,
        date: data.date.toISOString(),
        type: newTransactionType!,
        value: Number(data.value),
      });

      handleCloseNewTransactionModal();

      toast.success(
        `${TRANSACTION_TYPE[newTransactionType!]} cadastrada com sucesso!`
      );
    } catch {
      toast.error(`Erro ao cadastrar ${TRANSACTION_TYPE[newTransactionType!]}`);
    }
  });

  return {
    bankAccounts,
    categories,
    closeNewTransactionModal: handleCloseNewTransactionModal,
    control,
    errors,
    handleSubmit,
    isLoading,
    isNewTransactionModalOpen,
    newTransactionType,
    register,
  };
}
