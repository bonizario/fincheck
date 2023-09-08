import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { httpClient } from '../../../app/services/httpClient';

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
    handleSubmit: hookFormHandleSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const handleSubmit = hookFormHandleSubmit(async data => {
    const response = await httpClient.post('/auth/signin', data);

    console.log(response.data);
  });

  return { handleSubmit, register, errors };
}
