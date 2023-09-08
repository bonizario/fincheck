import { formatCurrency } from '../../../../../app/utils/formatCurrency';
import { BankAccountIcon } from '../../../../components/icons/bankAccounts/BankAccountIcon';

type BankAccountCardProps = {
  color: string;
  name: string;
  balance: number;
  type: 'CASH' | 'CHECKING' | 'INVESTMENT';
};

export function BankAccountCard({ color, name, balance, type }: BankAccountCardProps) {
  return (
    <div
      className="flex h-[200px] flex-col justify-between rounded-2xl border-b-4 border-teal-950 bg-white p-4"
      style={{ borderColor: color }}
    >
      <div>
        <BankAccountIcon type={type} />
        <span className="mt-4 block font-medium tracking-[-0.5px] text-gray-800">{name}</span>
      </div>

      <div>
        <span className="block font-medium tracking-[-0.5px] text-gray-800">
          {formatCurrency(balance)}
        </span>
        <small className="text-sm text-gray-600">Saldo atual</small>
      </div>
    </div>
  );
}
