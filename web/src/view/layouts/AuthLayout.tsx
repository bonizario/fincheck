import { Outlet } from 'react-router-dom';

import fincheckPreview from '../../assets/fincheck-preview.png';
import { Logo } from '../components/Logo';

export function AuthLayout() {
  return (
    <div className="flex w-full h-full p-8">
      <div className="w-full h-full flex flex-col items-center justify-center gap-16 lg:w-1/2 lg:pr-8">
        <Logo className="h-6 text-gray-500" />
        <div className="w-full max-w-[440px]">
          <Outlet />
        </div>
      </div>

      <div className="w-1/2 h-full items-center justify-center relative hidden lg:flex">
        <img
          src={fincheckPreview}
          alt="Fincheck Preview"
          className="object-cover w-full h-full max-w-[656px] max-h-[960px] select-none rounded-[32px]"
        />
        <div className="max-w-[656px] bg-white p-10 rounded-b-[32px] absolute bottom-0">
          <Logo className="text-teal-900 h-8" />
          <p className="text-gray-700 font-medium text-xl mt-6">
            Gerencie suas finanças pessoais de uma forma simples com o fincheck, e o melhor,
            totalmente de graça!
          </p>
        </div>
      </div>
    </div>
  );
}
