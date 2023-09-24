import { NumericFormat } from 'react-number-format';

export function InputCurrency() {
  return (
    <NumericFormat
      autoFocus
      allowLeadingZeros={false}
      allowNegative={false}
      decimalScale={2}
      decimalSeparator=","
      fixedDecimalScale
      thousandSeparator="."
      className="peer w-full text-h1 focus-visible:outline-none"
    />
  );
}
