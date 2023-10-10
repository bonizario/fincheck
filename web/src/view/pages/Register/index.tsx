import { Link } from 'react-router-dom';

import { Button } from '@view/components/Button';
import { Input } from '@view/components/Input';
import { useRegisterController } from './useRegisterController';

export function Register() {
  const { errors, isLoading, handleSubmit, register } = useRegisterController();

  return (
    <>
      <header className="flex flex-col items-center gap-4 text-center">
        <h1 className="text-h2 text-gray-900">Crie sua conta</h1>
        <p className="space-x-2">
          <span className="text-base-normal text-gray-700">
            Já possui uma conta?
          </span>
          <Link to="/login" className="text-button-lg text-teal-900">
            Fazer login
          </Link>
        </p>
      </header>

      <form
        noValidate
        onSubmit={handleSubmit}
        className="mt-12 flex flex-col gap-4"
      >
        <Input
          type="text"
          placeholder="Nome"
          error={errors.name?.message}
          {...register('name')}
        />

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
          Criar conta
        </Button>
      </form>
    </>
  );
}
