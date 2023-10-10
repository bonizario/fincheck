import { zodResolver } from '@hookform/resolvers/zod';
import { useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { z } from 'zod';

import { TRANSACTION_TYPE } from '@app/config/constants';
import { type Transaction } from '@app/entities/Transaction';
import { useGetAllBankAccounts } from '@app/hooks/bankAccounts';
import { useGetAllCategories } from '@app/hooks/categories';
import {
  useDeleteTransaction,
  useUpdateTransaction,
} from '@app/hooks/transactions';

const schema = z.object({
  value: z.union([
    z.number({ required_error: 'Valor é obrigatório' }),
    z.string().trim().min(1, 'Valor é obrigatório'),
  ]),
  name: z.string().trim().min(1, 'Nome é obrigatório'),
  categoryId: z.string().trim().min(1, 'Categoria é obrigatória'),
  bankAccountId: z.string().trim().min(1, 'Conta bancária é obrigatória'),
  date: z.date({ required_error: 'Data é obrigatória' }),
});

type FormData = z.infer<typeof schema>;

export function useEditTransactionModalController(
  onClose: () => void,
  transaction: Transaction | null
) {
  const {
    control,
    formState: { errors, isDirty },
    handleSubmit: hookFormSubmit,
    register,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      value: transaction?.value,
      name: transaction?.name,
      categoryId: transaction?.categoryId,
      bankAccountId: transaction?.bankAccountId,
      date: transaction ? new Date(transaction.date) : new Date(),
    },
  });

  const [isConfirmDeleteModalOpen, setIsConfirmDeleteModalOpen] =
    useState(false);

  const { bankAccounts } = useGetAllBankAccounts();

  const { categories: allCategories } = useGetAllCategories();

  const { isUpdatingTransaction, updateTransaction } = useUpdateTransaction();

  const { isDeletingTransaction, deleteTransaction } = useDeleteTransaction();

  const categories = useMemo(() => {
    return allCategories.filter(
      category => category.type === transaction?.type
    );
  }, [allCategories, transaction?.type]);

  const handleSubmit = hookFormSubmit(async data => {
    if (!isDirty) {
      onClose();
      return;
    }

    try {
      await updateTransaction({
        ...data,
        id: transaction!.id,
        date: data.date.toISOString(),
        type: transaction!.type,
        value: Number(data.value),
      });

      onClose();

      toast.success(
        `${TRANSACTION_TYPE[transaction!.type]} editada com sucesso!`
      );
    } catch {
      toast.error(`Erro ao editar ${TRANSACTION_TYPE[transaction!.type]}`);
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
      await deleteTransaction(transaction!.id);

      onClose();
      toast.success('Conta deletada com sucesso!');
    } catch {
      toast.error('Erro ao deletar conta');
    }
  }

  return {
    bankAccounts,
    categories,
    control,
    errors,
    handleCloseConfirmDeleteModal,
    handleConfirmDelete,
    handleOpenConfirmDeleteModal,
    handleSubmit,
    isConfirmDeleteModalOpen,
    isDeletingTransaction,
    isLoading: isUpdatingTransaction,
    register,
  };
}
