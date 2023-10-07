import { ComponentProps } from 'react';

import { cn } from '@app/utils/cn';
import { Spinner } from './Spinner';

type ButtonProps = ComponentProps<'button'> & {
  isLoading?: boolean;
  variant?: 'danger' | 'ghost';
};

export function Button({
  children,
  className,
  disabled,
  isLoading,
  variant,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      disabled={disabled || isLoading}
      className={cn(
        'flex h-[3.375rem] items-center justify-center rounded-2xl bg-teal-900 px-6 text-button-lg text-white',
        'transition-all enabled:hover:brightness-110 enabled:hover:filter',
        'disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-500',
        variant === 'danger' && 'bg-red-900',
        variant === 'ghost' &&
          'border border-gray-800 bg-transparent text-gray-800 enabled:hover:bg-gray-800/5 disabled:border-none',
        className
      )}
    >
      {!isLoading && children}

      {isLoading && <Spinner className="h-6 w-6" />}
    </button>
  );
}
