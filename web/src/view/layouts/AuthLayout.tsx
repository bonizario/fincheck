import { Outlet } from 'react-router-dom';

import fincheckPreview from '@assets/fincheck-preview.png';
import { Logo } from '@view/components/Logo';

export function AuthLayout() {
  return (
    <div className="flex h-full w-full p-8">
      <div className="flex h-full w-full flex-col items-center justify-center gap-16 lg:w-1/2 lg:pr-8">
        <Logo className="h-6 text-gray-500" />
        <div className="w-full max-w-[27.5rem]">
          <Outlet />
        </div>
      </div>

      <div className="relative hidden h-full w-1/2 items-center justify-center lg:flex">
        <img
          src={fincheckPreview}
          alt="Fincheck Preview"
          className="h-full max-h-[60rem] w-full max-w-[41rem] select-none rounded-[2rem] object-cover"
        />
        <div className="absolute bottom-0 max-w-[41rem] rounded-b-[2rem] bg-white p-10">
          <Logo className="h-8 text-teal-900" />
          <p className="mt-6 text-lg-medium text-gray-700">
            Gerencie suas finanças pessoais de uma forma simples com o fincheck, e o melhor,
            totalmente de graça!
          </p>
        </div>
      </div>
    </div>
  );
}
