import { ComponentProps } from 'react';

import { cn } from '@app/utils/cn';
import { Spinner } from './Spinner';

interface ButtonProps extends ComponentProps<'button'> {
  isLoading?: boolean;
}

export function Button({ className, isLoading, disabled, children, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      disabled={disabled || isLoading}
      className={cn(
        'flex h-[3.375rem] items-center justify-center rounded-2xl bg-teal-900 px-6 text-button-lg text-white',
        'transition-all hover:brightness-110 hover:filter disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-500',
        className
      )}
    >
      {!isLoading && children}

      {isLoading && <Spinner className="h-6 w-6" />}
    </button>
  );
}
