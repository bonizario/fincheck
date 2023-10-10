import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { z } from 'zod';

import { BANK_ACCOUNT_TYPE } from '@app/config/constants';
import { type BankAccountType } from '@app/entities/BankAccount';
import { useCreateBankAccount } from '@app/hooks/bankAccounts';
import { useDashboard } from '../../components/DashboardContext/useDashboard';

const schema = z.object({
  color: z.string().trim().min(1, 'Cor é obrigatória'),
  initialBalance: z.string().trim().min(1, 'Saldo inicial é obrigatório'),
  name: z.string().trim().min(1, 'Nome da conta é obrigatório'),
  type: z.enum(Object.keys(BANK_ACCOUNT_TYPE) as [BankAccountType], {
    errorMap: () => ({
      message: 'Tipo de conta é obrigatório',
    }),
  }),
});

type FormData = z.infer<typeof schema>;

export function useNewBankAccountModalController() {
  const { closeNewBankAccountModal, isNewBankAccountModalOpen } =
    useDashboard();

  const { isCreatingBankAccount, createBankAccount } = useCreateBankAccount();

  const {
    control,
    formState: { errors },
    handleSubmit: hookFormSubmit,
    register,
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      color: '',
      initialBalance: '0',
      name: '',
      type: '' as unknown as FormData['type'],
    },
  });

  function handleCloseNewBankAccountModal() {
    closeNewBankAccountModal();
    reset();
  }

  const handleSubmit = hookFormSubmit(async data => {
    try {
      await createBankAccount({
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
    isLoading: isCreatingBankAccount,
    isNewBankAccountModalOpen,
    register,
  };
}
