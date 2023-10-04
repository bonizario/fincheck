import { ChevronDownIcon, CrossCircledIcon } from '@radix-ui/react-icons';
import { useState } from 'react';

import { cn } from '@app/utils/cn';
import { DropdownMenu } from './DropdownMenu';
import { ColorIcon } from './icons/ColorIcon';

type ColorsDropdownInputProps = {
  className?: string;
  error?: string;
  onChange?: (color: string) => void;
  value?: string;
};

type Color = {
  bg: `#${string}`;
  color: `#${string}`;
};

const colors: Color[] = [
  { color: '#FA5252', bg: '#FFF5F5' },
  { color: '#E64980', bg: '#FFF0F6' },
  { color: '#BE4BDB', bg: '#F8F0FC' },
  { color: '#7950F2', bg: '#F3F0FF' },
  { color: '#4C6EF5', bg: '#EDF2FF' },
  { color: '#228BE6', bg: '#E7F5FF' },
  { color: '#15AABF', bg: '#E3FAFC' },
  { color: '#12B886', bg: '#E6FCF5' },
  { color: '#40C057', bg: '#EBFBEE' },
  { color: '#82C91E', bg: '#F4FCE3' },
  { color: '#FAB005', bg: '#FFF9DB' },
  { color: '#FD7E14', bg: '#FFF4E6' },
  { color: '#876445', bg: '#F9F5E7' },
  { color: '#868E96', bg: '#F8F9FA' },
  { color: '#212529', bg: '#F8F9FA' },
  { color: '#FFFFFF', bg: '#DEE2E6' },
];

export function ColorsDropdownInput({
  className,
  error,
  onChange,
  value,
}: ColorsDropdownInputProps) {
  const [selectedColor, setSelectedColor] = useState<Color | null>(() => {
    if (!value) {
      return null;
    }
    return colors.find(color => color.color === value) ?? null;
  });

  function handleSelect(color: Color) {
    setSelectedColor(color);
    onChange?.(color.color);
  }

  return (
    <div>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <button
            type="button"
            className={cn(
              'relative h-[3.25rem] w-full rounded-lg border border-gray-500 bg-white px-3',
              'text-base-normal text-gray-700 focus-visible:border-transparent',
              error && 'border-red-900 focus-visible:outline-red-900',
              className
            )}
          >
            Cor
            <div className="absolute right-3 top-1/2 -translate-y-1/2">
              {!selectedColor && <ChevronDownIcon className="h-6 w-6 text-gray-800" />}
              {selectedColor && <ColorIcon color={selectedColor.color} bg={selectedColor.bg} />}
            </div>
          </button>
        </DropdownMenu.Trigger>

        <DropdownMenu.Content className="z-20 grid w-screen grid-cols-4 xs:w-[22rem]">
          {colors.map(color => (
            <DropdownMenu.Item
              key={`${color.color}${color.bg}`}
              onSelect={() => handleSelect(color)}
              className="items-center justify-center"
            >
              <ColorIcon color={color.color} bg={color.bg} />
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Root>

      {error && (
        <div className="mt-2 flex items-center gap-2 text-red-900">
          <CrossCircledIcon />
          <span className="text-input-helper">{error}</span>
        </div>
      )}
    </div>
  );
}
