import { CrossCircledIcon } from '@radix-ui/react-icons';
import { useState } from 'react';

import { cn } from '@app/utils/cn';
import { formatDate } from '@app/utils/formatDate';
import { Popover } from './Popover';
import { DatePicker } from './DatePicker';

type DatePickerInputProps = {
  error?: string;
};

export function DatePickerInput({ error }: DatePickerInputProps) {
  const [selectedDate, setSelectedDate] = useState(new Date());

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
          <DatePicker value={selectedDate} onChange={setSelectedDate} />
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
