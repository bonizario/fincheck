import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { z } from 'zod';

import { bankAccountsService } from '@app/services/bankAccountsService';
import { BANK_ACCOUNT_TYPE } from '@app/types/BankAccount';
import { useDashboard } from '../../components/DashboardContext/useDashboard';

const schema = z.object({
  color: z.string().trim().min(1, 'Cor é obrigatória'),
  initialBalance: z.string().trim().min(1, 'Saldo inicial é obrigatório'),
  name: z.string().trim().min(1, 'Nome da conta é obrigatório'),
  type: z.enum(BANK_ACCOUNT_TYPE, {
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

export function useNewBankAccountModal() {
  const { closeNewBankAccountModal, isNewBankAccountModalOpen } = useDashboard();

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

  const { isLoading, mutateAsync } = useMutation(bankAccountsService.create);

  const handleSubmit = hookFormSubmit(async data => {
    try {
      await mutateAsync({
        ...data,
        initialBalance: Number(data.initialBalance),
      });
      closeNewBankAccountModal();
      reset();
      toast.success('Conta cadastrada com sucesso!');
    } catch {
      toast.error('Erro ao cadastrar conta');
    }
  });

  return {
    closeNewBankAccountModal,
    control,
    errors,
    handleSubmit,
    isLoading,
    isNewBankAccountModalOpen,
    register,
  };
}
