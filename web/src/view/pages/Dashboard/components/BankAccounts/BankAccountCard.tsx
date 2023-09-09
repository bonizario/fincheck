import { cn } from '@app/utils/cn';
import { formatCurrency } from '@app/utils/formatCurrency';
import { BankAccountIcon } from '@view/components/icons/bankAccounts/BankAccountIcon';
import { useDashboard } from '../DashboardContext/useDashboard';

type BankAccountCardProps = {
  color: string;
  name: string;
  balance: number;
  type: 'CASH' | 'CHECKING' | 'INVESTMENT';
};

export function BankAccountCard({ color, name, balance, type }: BankAccountCardProps) {
  const { areValuesVisible } = useDashboard();

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
        <span
          className={cn(
            'block font-medium tracking-[-0.5px] text-gray-800',
            !areValuesVisible && 'blur-[6px]'
          )}
        >
          {formatCurrency(balance)}
        </span>
        <small className="text-sm text-gray-600">Saldo atual</small>
      </div>
    </div>
  );
}
