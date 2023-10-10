import { type BankAccount } from '@app/entities/BankAccount';
import { cn } from '@app/utils/cn';
import { formatCurrency } from '@app/utils/formatCurrency';
import { BankAccountIcon } from '@view/components/icons/bankAccounts/BankAccountIcon';
import { useDashboard } from '../DashboardContext/useDashboard';

type BankAccountCardProps = {
  bankAccount: BankAccount;
};

export function BankAccountCard({ bankAccount }: BankAccountCardProps) {
  const { areValuesVisible, openEditBankAccountModal } = useDashboard();

  const { color, currentBalance, name, type } = bankAccount;

  return (
    <div
      className="flex h-[12.5rem] flex-col justify-between rounded-2xl border-b-4 border-teal-950 bg-white p-4"
      style={{ borderColor: color }}
      role="button"
      onClick={() => openEditBankAccountModal(bankAccount)}
    >
      <div>
        <BankAccountIcon type={type} />
        <span className="mt-4 block text-base-medium text-gray-800">
          {name}
        </span>
      </div>

      <div>
        <span
          className={cn(
            'block text-base-medium text-gray-800',
            !areValuesVisible && 'blur-[0.375rem]'
          )}
        >
          {formatCurrency(currentBalance)}
        </span>
        <small className="text-sm-normal text-gray-600">Saldo atual</small>
      </div>
    </div>
  );
}
