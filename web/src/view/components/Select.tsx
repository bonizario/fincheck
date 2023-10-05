import { ChevronDownIcon, ChevronUpIcon, CrossCircledIcon } from '@radix-ui/react-icons';
import * as RadixSelect from '@radix-ui/react-select';
import { useState } from 'react';

import { cn } from '@app/utils/cn';

type SelectProps = {
  className?: string;
  error?: string;
  onChange?: (value: string) => void;
  options: {
    value: string;
    label: string;
  }[];
  placeholder?: string;
  value?: string;
};

export function Select({ className, error, onChange, options, placeholder, value }: SelectProps) {
  const [selectedValue, setSelectedValue] = useState(value);

  function handleSelect(value: string) {
    onChange?.(value);
    setSelectedValue(value);
  }

  return (
    <div>
      <div className="relative">
        <label
          className={cn(
            'pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-700',
            selectedValue && 'left-[0.8125rem] top-2 translate-y-0 text-input-label transition-all'
          )}
        >
          {placeholder}
        </label>
        <RadixSelect.Root value={value} onValueChange={handleSelect}>
          <RadixSelect.Trigger
            className={cn(
              'h-[3.25rem] w-full rounded-lg border border-gray-500 px-3 pt-4 text-gray-800',
              'relative text-left focus-visible:border-transparent',
              error &&
                'border-red-900 focus-visible:border-transparent focus-visible:outline-red-900',
              className
            )}
          >
            <RadixSelect.Value />

            <RadixSelect.Icon className="absolute right-3 top-1/2 -translate-y-1/2">
              <ChevronDownIcon className="h-6 w-6" />
            </RadixSelect.Icon>
          </RadixSelect.Trigger>

          <RadixSelect.Content
            sideOffset={8}
            position="popper"
            className="z-20 w-[var(--radix-select-trigger-width)] overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-[0_11px_20px_0_rgba(0,0,0,0.1)]"
          >
            <RadixSelect.ScrollUpButton className="flex h-6 cursor-default items-center justify-center bg-white">
              <ChevronUpIcon />
            </RadixSelect.ScrollUpButton>

            <RadixSelect.Viewport className="space-y-2 p-2">
              {options.map(option => (
                <RadixSelect.Item
                  key={option.value}
                  value={option.value}
                  className="cursor-pointer select-none rounded-xl p-2 text-sm-normal transition-colors data-[highlighted]:bg-gray-100 data-[state=checked]:bg-gray-200"
                >
                  <RadixSelect.ItemText>{option.label}</RadixSelect.ItemText>
                </RadixSelect.Item>
              ))}
            </RadixSelect.Viewport>

            <RadixSelect.ScrollDownButton className="flex h-6 cursor-default items-center justify-center bg-white">
              <ChevronDownIcon />
            </RadixSelect.ScrollDownButton>
          </RadixSelect.Content>
        </RadixSelect.Root>
      </div>

      {error && (
        <div className="mt-2 flex items-center gap-2 text-red-900">
          <CrossCircledIcon />
          <span className="text-input-helper">{error}</span>
        </div>
      )}
    </div>
  );
}
