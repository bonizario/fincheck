import { Link } from 'react-router-dom';

import { useLoginController } from './useLoginController';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

export function Login() {
  const { errors, isLoading, handleSubmit, register } = useLoginController();

  return (
    <>
      <header className="flex flex-col items-center gap-4 text-center">
        <h1 className="text-2xl font-bold tracking-[-1px] text-gray-900">Entre em sua conta</h1>
        <p className="space-x-2">
          <span className="tracking-[-0.5px] text-gray-700">Novo por aqui?</span>
          <Link to="/register" className="font-medium tracking-[-0.5px] text-teal-900">
            Crie uma conta
          </Link>
        </p>
      </header>

      <form noValidate onSubmit={handleSubmit} className="mt-[60px] flex flex-col gap-4">
        <Input
          type="email"
          placeholder="Email"
          error={errors.email?.message}
          {...register('email')}
        />

        <Input
          type="password"
          placeholder="Senha"
          error={errors.password?.message}
          {...register('password')}
        />

        <Button type="submit" className="mt-2" isLoading={isLoading}>
          Entrar
        </Button>
      </form>
    </>
  );
}
