import { CrossCircledIcon } from '@radix-ui/react-icons';
import { ComponentProps, forwardRef } from 'react';

import { cn } from '../../app/utils/cn';

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
            'peer h-[52px] w-full rounded-lg border border-gray-500 bg-white px-3 pt-4 text-gray-800 placeholder-shown:pt-0 focus:border-transparent focus:pt-4 focus:outline focus:outline-2 focus:outline-teal-900',
            error && 'border-red-900 focus:outline-red-900',
            className
          )}
        />
        <label
          htmlFor={inputId}
          className="pointer-events-none absolute left-[13px] top-2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs"
        >
          {placeholder}
        </label>

        {error && (
          <div className="mt-2 flex items-center gap-2 text-red-900">
            <CrossCircledIcon />
            <span className="text-xs">{error}</span>
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export { Input };
