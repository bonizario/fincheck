import { ComponentProps, forwardRef } from 'react';

interface InputProps extends ComponentProps<'input'> {
  name: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ id, name, placeholder, ...props }, ref) => {
    const inputId = id ?? name;

    return (
      <div className="relative">
        <input
          {...props}
          id={inputId}
          name={name}
          ref={ref}
          placeholder=" "
          className=" peer h-[52px] w-full rounded-lg border border-gray-500 bg-white px-3 pt-4 text-gray-800 placeholder-shown:pt-0 focus:border-transparent focus:pt-4 focus:outline focus:outline-2 focus:outline-teal-900"
        />
        <label
          htmlFor={inputId}
          className="pointer-events-none absolute left-[13px] top-2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs"
        >
          {placeholder}
        </label>
      </div>
    );
  }
);

Input.displayName = 'Input';

export { Input };
