import { CrossCircledIcon } from '@radix-ui/react-icons';
import { ComponentProps, forwardRef } from 'react';

import { cn } from '@app/utils/cn';

interface InputProps extends ComponentProps<'input'> {
  name: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ id, error, name, placeholder, className, ...props }, ref) => {
    const inputId = id ?? name;

    return (
      <div className="relative">
        <input
          {...props}
          id={inputId}
          name={name}
          ref={ref}
          placeholder=" "
          className={cn(
            'peer h-[3.25rem] w-full rounded-lg border border-gray-500 bg-white px-3 pt-4 text-gray-800',
            'placeholder-shown:pt-0 focus-visible:border-transparent focus-visible:pt-4',
            error &&
              'border-red-900 focus-visible:border-transparent focus-visible:outline-red-900',
            className
          )}
        />
        <label
          htmlFor={inputId}
          className={`
            pointer-events-none absolute left-[0.8125rem] top-[0.5625rem] text-input-label text-gray-700
            transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base-normal
            peer-focus:top-[0.5625rem] peer-focus:text-input-label`}
        >
          {placeholder}
        </label>

        {error && (
          <div className="mt-2 flex items-center gap-2 text-red-900">
            <CrossCircledIcon />
            <span className="text-input-helper">{error}</span>
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export { Input };
