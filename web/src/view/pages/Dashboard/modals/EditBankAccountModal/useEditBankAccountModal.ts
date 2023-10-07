import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { z } from 'zod';

import { BankAccountTypes } from '@app/entities/BankAccount';
import { bankAccountsService } from '@app/services/bankAccountsService';
import { useDashboard } from '../../components/DashboardContext/useDashboard';

const schema = z.object({
  color: z.string().trim().min(1, 'Cor é obrigatória'),
  initialBalance: z.union([
    z.number({ required_error: 'Saldo inicial é obrigatório' }),
    z.string().trim().min(1, 'Saldo inicial é obrigatório'),
  ]),
  name: z.string().trim().min(1, 'Nome da conta é obrigatório'),
  type: z.enum(BankAccountTypes, {
    errorMap: () => ({
      message: 'Tipo de conta é obrigatório',
    }),
  }),
});

type FormData = z.infer<typeof schema>;

export function useEditBankAccountModal() {
  const [isConfirmDeleteModalOpen, setIsConfirmDeleteModalOpen] = useState(false);

  const { bankAccountBeingEdited, closeEditBankAccountModal, isEditBankAccountModalOpen } =
    useDashboard();

  const queryClient = useQueryClient();

  const { isLoading: isUpdatingBankAccount, mutateAsync: updateBankAccount } = useMutation({
    mutationFn: bankAccountsService.update,
    onSuccess: () => queryClient.invalidateQueries(['bankAccounts']),
  });

  const { isLoading: isDeletingBankAccount, mutateAsync: deleteBankAccount } = useMutation({
    mutationFn: bankAccountsService.remove,
    onSuccess: () => queryClient.invalidateQueries(['bankAccounts']),
  });

  const {
    control,
    formState: { errors, isDirty },
    handleSubmit: hookFormSubmit,
    register,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      color: bankAccountBeingEdited?.color,
      initialBalance: bankAccountBeingEdited?.initialBalance,
      name: bankAccountBeingEdited?.name,
      type: bankAccountBeingEdited?.type,
    },
  });

  const handleSubmit = hookFormSubmit(async data => {
    if (!isDirty) {
      closeEditBankAccountModal();
      return;
    }

    try {
      await updateBankAccount({
        ...data,
        initialBalance: Number(data.initialBalance),
        id: bankAccountBeingEdited!.id,
      });

      closeEditBankAccountModal();

      toast.success('Conta editada com sucesso!');
    } catch {
      toast.error('Erro ao editar conta');
    }
  });

  function handleOpenConfirmDeleteModal() {
    setIsConfirmDeleteModalOpen(true);
  }

  function handleCloseConfirmDeleteModal() {
    setIsConfirmDeleteModalOpen(false);
  }

  async function handleConfirmDelete() {
    try {
      await deleteBankAccount(bankAccountBeingEdited!.id);

      closeEditBankAccountModal();
      toast.success('Conta deletada com sucesso!');
    } catch {
      toast.error('Erro ao deletar conta');
    }
  }

  return {
    closeEditBankAccountModal,
    control,
    errors,
    handleCloseConfirmDeleteModal,
    handleConfirmDelete,
    handleOpenConfirmDeleteModal,
    handleSubmit,
    isConfirmDeleteModalOpen,
    isDeletingBankAccount,
    isEditBankAccountModalOpen,
    isUpdatingBankAccount,
    register,
  };
}
