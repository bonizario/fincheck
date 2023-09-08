import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { z } from 'zod';

import { authService } from '../../../app/services/authService';
import { SignInParams } from '../../../app/services/authService/signIn';

const schema = z.object({
  email: z.string().nonempty('Email é obrigatório.').email('Insira um email válido.'),
  password: z
    .string()
    .nonempty('Senha é obrigatória.')
    .min(8, 'Senha deve ter pelo menos 8 caracteres.'),
});

type FormData = z.infer<typeof schema>;

export function useLoginController() {
  const {
    handleSubmit: hookFormSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const { isLoading, mutateAsync } = useMutation({
    mutationFn: async (data: SignInParams) => authService.signIn(data),
  });

  const handleSubmit = hookFormSubmit(async data => {
    try {
      const { accessToken } = await mutateAsync(data);
      console.log({ accessToken });
    } catch {
      toast.error('Email ou senha incorretos!');
    }
  });

  return { errors, isLoading, handleSubmit, register };
}
