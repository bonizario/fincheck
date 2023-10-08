import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { z } from 'zod';

import { BankAccountTypes } from '@app/entities/BankAccount';
import { bankAccountsService } from '@app/services/bankAccountsService';
import { useDashboard } from '../../components/DashboardContext/useDashboard';

const schema = z.object({
  color: z.string().trim().min(1, 'Cor é obrigatória'),
  initialBalance: z.string().trim().min(1, 'Saldo inicial é obrigatório'),
  name: z.string().trim().min(1, 'Nome da conta é obrigatório'),
  type: z.enum(BankAccountTypes, {
    errorMap: () => ({
      message: 'Tipo de conta é obrigatório',
    }),
  }),
});

const defaultValues = {
  color: '',
  initialBalance: '0',
  name: '',
  type: '',
};

type FormData = z.infer<typeof schema>;

export function useNewBankAccountModalController() {
  const { closeNewBankAccountModal, isNewBankAccountModalOpen } = useDashboard();

  const queryClient = useQueryClient();

  const { isLoading, mutateAsync } = useMutation({
    mutationFn: bankAccountsService.create,
    onSuccess: () => queryClient.invalidateQueries(['bank-accounts']),
  });

  const {
    control,
    formState: { errors },
    handleSubmit: hookFormSubmit,
    register,
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: defaultValues as FormData,
  });

  function handleCloseNewBankAccountModal() {
    closeNewBankAccountModal();
    reset();
  }

  const handleSubmit = hookFormSubmit(async data => {
    try {
      await mutateAsync({
        ...data,
        initialBalance: Number(data.initialBalance),
      });

      handleCloseNewBankAccountModal();

      toast.success('Conta cadastrada com sucesso!');
    } catch {
      toast.error('Erro ao cadastrar conta');
    }
  });

  return {
    closeNewBankAccountModal: handleCloseNewBankAccountModal,
    control,
    errors,
    handleSubmit,
    isLoading,
    isNewBankAccountModalOpen,
    register,
  };
}
