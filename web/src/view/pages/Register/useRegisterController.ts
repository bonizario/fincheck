import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { z } from 'zod';

import { authService } from '../../../app/services/authService';
import { SignUpParams } from '../../../app/services/authService/signUp';

const schema = z.object({
  name: z.string().nonempty('Nome é obrigatório.'),
  email: z.string().nonempty('Email é obrigatório.').email('Insira um email válido.'),
  password: z
    .string()
    .nonempty('Senha é obrigatória.')
    .min(8, 'Senha deve ter pelo menos 8 caracteres.'),
});

type FormData = z.infer<typeof schema>;

export function useRegisterController() {
  const {
    handleSubmit: hookFormHandleSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const { isLoading, mutateAsync } = useMutation({
    mutationFn: async (data: SignUpParams) => authService.signUp(data),
  });

  const handleSubmit = hookFormHandleSubmit(async data => {
    try {
      const { accessToken } = await mutateAsync(data);
      toast.success('Sucesso ao cadastrar conta!');
      console.log({ accessToken });
    } catch {
      toast.error('Erro ao cadastrar conta!');
    }
  });

  return { errors, isLoading, handleSubmit, register };
}
