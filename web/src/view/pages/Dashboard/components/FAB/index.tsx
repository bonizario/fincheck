import { PlusIcon } from '@radix-ui/react-icons';

import { DropdownMenu } from '@view/components/DropdownMenu';
import { ColoredBankAccountIcon } from '@view/components/icons/ColoredBankAccountIcon';
import { ColoredExpenseIcon } from '@view/components/icons/ColoredExpenseIcon';
import { ColoredIncomeIcon } from '@view/components/icons/ColoredIncomeIcon';
import { useDashboard } from '../DashboardContext/useDashboard';

export function FAB() {
  const { openNewBankAccountModal, openNewTransactionModal } = useDashboard();

  return (
    <div className="fixed bottom-4 right-4 z-10">
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <button
            className={`
              group w-12 justify-center rounded-full bg-teal-900 text-white filter transition
              hover:brightness-110 focus-visible:outline-teal-950 data-[state=open]:brightness-110`}
          >
            <PlusIcon className="h-5 w-5 transition-transform group-data-[state=open]:rotate-45" />
          </button>
        </DropdownMenu.Trigger>

        <DropdownMenu.Content align="end" side="top">
          <DropdownMenu.Item className="gap-2" onSelect={() => openNewTransactionModal('EXPENSE')}>
            <ColoredExpenseIcon />
            Nova Despesa
          </DropdownMenu.Item>

          <DropdownMenu.Item className="gap-2" onSelect={() => openNewTransactionModal('INCOME')}>
            <ColoredIncomeIcon />
            Nova Receita
          </DropdownMenu.Item>

          <DropdownMenu.Item onSelect={openNewBankAccountModal} className="gap-2">
            <ColoredBankAccountIcon />
            Nova Conta
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </div>
  );
}
