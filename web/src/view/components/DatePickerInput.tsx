import { CrossCircledIcon } from '@radix-ui/react-icons';
import { useState } from 'react';

import { cn } from '@app/utils/cn';
import { formatDate } from '@app/utils/formatDate';
import { DatePicker } from './DatePicker';
import { Popover } from './Popover';

type DatePickerInputProps = {
  error?: string;
  onChange?: (date: Date) => void;
  value?: Date;
};

export function DatePickerInput({ error, onChange, value }: DatePickerInputProps) {
  const [selectedDate, setSelectedDate] = useState(value ?? new Date());

  function handleChangeDate(date: Date) {
    setSelectedDate(date);
    onChange?.(date);
  }

  return (
    <div>
      <Popover.Root>
        <Popover.Trigger>
          <button
            type="button"
            className={cn(
              'relative h-[3.25rem] w-full rounded-lg border border-gray-500 bg-white px-3 pt-4',
              'flex items-center text-base-normal text-gray-700 focus-visible:border-transparent',
              error && 'border-red-900 focus-visible:outline-red-900'
            )}
          >
            <span className="absolute left-[0.8125rem] top-[0.5625rem] text-input-label text-gray-700">
              Data
            </span>
            <span>{formatDate(selectedDate)}</span>
          </button>
        </Popover.Trigger>

        <Popover.Content className="pointer-events-auto z-20 p-4">
          <DatePicker value={selectedDate} onChange={handleChangeDate} />
        </Popover.Content>
      </Popover.Root>

      {error && (
        <div className="mt-2 flex items-center gap-2 text-red-900">
          <CrossCircledIcon />
          <span className="text-input-helper">{error}</span>
        </div>
      )}
    </div>
  );
}
