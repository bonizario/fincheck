import { zodResolver } from '@hookform/resolvers/zod';
import { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { type TransactionType } from '@app/entities/Transaction';
import { useGetAllBankAccounts } from '@app/hooks/bankAccounts';
import { useGetAllCategories } from '@app/hooks/categories';

const schema = z.object({
  value: z.string().trim().min(1, 'Valor é obrigatório'),
  name: z.string().trim().min(1, 'Nome é obrigatório'),
  categoryId: z.string().trim().min(1, 'Categoria é obrigatória'),
  bankAccountId: z.string().trim().min(1, 'Conta bancária é obrigatória'),
  date: z.date({ required_error: 'Data é obrigatória' }),
});

type FormData = z.infer<typeof schema>;

export function useEditTransactionModalController(
  transactionType: TransactionType
) {
  const {
    control,
    formState: { errors },
    handleSubmit: hookFormSubmit,
    register,
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

  const { bankAccounts } = useGetAllBankAccounts();

  const { categories: allCategories } = useGetAllCategories();

  const categories = useMemo(() => {
    return allCategories.filter(category => category.type === transactionType);
  }, [allCategories, transactionType]);

  const handleSubmit = hookFormSubmit(async data => {
    console.log(data);
  });

  return {
    bankAccounts,
    categories,
    control,
    errors,
    handleSubmit,
    isLoading: false,
    register,
  };
}
