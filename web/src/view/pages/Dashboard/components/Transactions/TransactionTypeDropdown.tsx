import { ChevronDownIcon } from '@radix-ui/react-icons';

import { DropdownMenu } from '@view/components/DropdownMenu';
import { ExpensesIcon } from '@view/components/icons/ExpensesIcon';
import { IncomesIcon } from '@view/components/icons/IncomesIcon';
import { TransactionsIcon } from '@view/components/icons/TransactionsIcon';

export function TransactionTypeDropdown() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="gap-2">
        <TransactionsIcon />

        <span className="text-sm font-medium tracking-[-0.5px] text-gray-800">Transações</span>

        <ChevronDownIcon width={24} height={24} className="text-gray-900" />
      </DropdownMenu.Trigger>

      <DropdownMenu.Content className="w-[17.5rem]">
        <DropdownMenu.Item className="gap-2">
          <IncomesIcon />
          Receitas
        </DropdownMenu.Item>

        <DropdownMenu.Item className="gap-2">
          <ExpensesIcon />
          Despesas
        </DropdownMenu.Item>

        <DropdownMenu.Item className="gap-2">
          <TransactionsIcon />
          Transações
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
