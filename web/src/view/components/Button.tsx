import { ComponentProps } from 'react';

import { cn } from '../../app/utils/cn';

interface ButtonProps extends ComponentProps<'button'> {
  isLoading?: boolean;
}

export function Button({ className, isLoading, disabled, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      disabled={disabled || isLoading}
      className={cn(
        'h-12 rounded-2xl bg-teal-900 px-6 font-medium tracking-[-0.5px] text-white outline-none transition-all hover:bg-teal-800 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-600',
        className
      )}
    />
  );
}
