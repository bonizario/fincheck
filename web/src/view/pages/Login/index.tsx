import { Link } from 'react-router-dom';

import { Button } from '@view/components/Button';
import { Input } from '@view/components/Input';
import { useLoginController } from './useLoginController';

export function Login() {
  const { errors, isLoading, handleSubmit, register } = useLoginController();

  return (
    <>
      <header className="flex flex-col items-center gap-4 text-center">
        <h1 className="text-h2 text-gray-900">Entre em sua conta</h1>
        <p className="space-x-2">
          <span className="text-base-normal text-gray-700">Novo por aqui?</span>
          <Link to="/register" className="text-button-lg text-teal-900">
            Crie uma conta
          </Link>
        </p>
      </header>

      <form
        noValidate
        onSubmit={handleSubmit}
        className="mb-[4.25rem] mt-12 flex flex-col gap-4"
      >
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
