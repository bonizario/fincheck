import { ptBR } from 'date-fns/locale';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';

import { capitalizeFirstLetter } from '@app/utils/capitalizeFirstLetter';

interface DatePickerProps {
  value: Date;
  onChange: (date: Date) => void;
}

export function DatePicker({ value, onChange }: DatePickerProps) {
  return (
    <DayPicker
      locale={ptBR}
      selected={value}
      mode="single"
      onSelect={date => onChange(date ?? new Date())}
      classNames={{
        caption: 'flex items-center justify-between',
        nav: 'flex gap-1',
        nav_button_previous: 'text-teal-800 flex items-center justify-center !bg-transparent',
        nav_button_next: 'text-teal-800 flex items-center justify-center !bg-transparent',
        head_cell: 'uppercase text-xs text-gray-500 font-medium pt-1 pb-2',
        button: 'text-gray-700 cursor-pointer w-10 h-10 xs:m-0.5 hover:bg-teal-100 rounded-full',
        day_today: 'bg-gray-100 font-bold text-gray-900',
        day_selected: '!bg-teal-900 text-white font-medium',
      }}
      formatters={{ formatCaption }}
    />
  );
}

function formatCaption(date: Date, options?: { locale?: Locale }) {
  return <span>{capitalizeFirstLetter(format(date, 'LLLL yyyy', options))}</span>;
}
