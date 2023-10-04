import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { BANK_ACCOUNT_TYPE } from '@app/types/BankAccount';
import { useDashboard } from '../../components/DashboardContext/useDashboard';

const schema = z.object({
  color: z.string({
    errorMap: () => ({
      message: 'Cor é obrigatória',
    }),
  }),
  initialBalance: z.string().nonempty('Saldo inicial é obrigatório'),
  name: z.string().trim().nonempty('Nome da conta é obrigatório'),
  type: z.enum(BANK_ACCOUNT_TYPE, {
    errorMap: () => ({
      message: 'Tipo de conta é obrigatório',
    }),
  }),
});

type FormData = z.infer<typeof schema>;

export function useNewBankAccountModal() {
  const { closeNewBankAccountModal, isNewBankAccountModalOpen } = useDashboard();

  const {
    control,
    formState: { errors },
    handleSubmit: hookFormSubmit,
    register,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const handleSubmit = hookFormSubmit(async data => {
    console.log('handleSubmit', data);
  });

  return {
    closeNewBankAccountModal,
    control,
    errors,
    handleSubmit,
    isNewBankAccountModalOpen,
    register,
  };
}
