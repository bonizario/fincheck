import { CrossCircledIcon } from '@radix-ui/react-icons';
import { NumericFormat } from 'react-number-format';

type CurrencyInputProps = {
  error?: string;
  onChange?: (value: string) => void;
  value?: string | number;
};

export function CurrencyInput({ error, onChange, value }: CurrencyInputProps) {
  return (
    <div className="peer">
      <NumericFormat
        allowLeadingZeros={false}
        allowNegative={false}
        decimalScale={2}
        decimalSeparator=","
        maxLength={15}
        onFocus={event => (event.target.value === '0' ? (event.target.value = '') : null)}
        onValueChange={({ value }) => onChange?.(value)}
        thousandSeparator="."
        value={value}
        className="w-full text-h1 focus-visible:outline-none"
      />

      {error && (
        <div className="mt-2 flex items-center gap-2 text-red-900">
          <CrossCircledIcon />
          <span className="text-input-helper">{error}</span>
        </div>
      )}
    </div>
  );
}
