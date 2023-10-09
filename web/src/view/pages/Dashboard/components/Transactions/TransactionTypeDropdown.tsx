import { ChevronDownIcon } from '@radix-ui/react-icons';

import { type TransactionType } from '@app/entities/Transaction';
import { DropdownMenu } from '@view/components/DropdownMenu';
import { ExpensesIcon } from '@view/components/icons/ExpensesIcon';
import { IncomesIcon } from '@view/components/icons/IncomesIcon';
import { TransactionsIcon } from '@view/components/icons/TransactionsIcon';

type TransactionTypeDropdownProps = {
  onSelect: (type?: TransactionType) => void;
  selectedType: TransactionType | undefined;
};

export function TransactionTypeDropdown({ onSelect, selectedType }: TransactionTypeDropdownProps) {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="gap-2">
        <button>
          {selectedType === 'INCOME' && <IncomesIcon />}
          {selectedType === 'EXPENSE' && <ExpensesIcon />}
          {selectedType === undefined && <TransactionsIcon />}

          <span className="text-button-sm text-gray-800">
            {selectedType === 'INCOME' && 'Receitas'}
            {selectedType === 'EXPENSE' && 'Despesas'}
            {selectedType === undefined && 'Transações'}
          </span>

          <ChevronDownIcon width={24} height={24} className="text-gray-900" />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Content className="w-[17.5rem]">
        <DropdownMenu.Item className="gap-2" onSelect={() => onSelect('INCOME')}>
          <IncomesIcon />
          Receitas
        </DropdownMenu.Item>

        <DropdownMenu.Item className="gap-2" onSelect={() => onSelect('EXPENSE')}>
          <ExpensesIcon />
          Despesas
        </DropdownMenu.Item>

        <DropdownMenu.Item className="gap-2" onSelect={() => onSelect()}>
          <TransactionsIcon />
          Transações
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
