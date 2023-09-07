import { ComponentProps } from 'react';

interface ButtonProps extends ComponentProps<'button'> {}

export function Button(props: ButtonProps) {
  return (
    <button
      {...props}
      className="bg-teal-900 hover:bg-teal-800 px-6 h-12 rounded-2xl text-white font-medium tracking-[-0.5px] disabled:bg-gray-100 disabled:text-gray-600 disabled:cursor-not-allowed transition-all"
    />
  );
}
