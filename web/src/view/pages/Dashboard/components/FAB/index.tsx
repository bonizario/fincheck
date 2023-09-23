import { PlusIcon } from '@radix-ui/react-icons';

import { DropdownMenu } from '@view/components/DropdownMenu';
import { ColoredBankAccountIcon } from '@view/components/icons/ColoredBankAccountIcon';
import { ColoredExpenseIcon } from '@view/components/icons/ColoredExpenseIcon';
import { ColoredIncomeIcon } from '@view/components/icons/ColoredIncomeIcon';

export function FAB() {
  return (
    <div className="fixed bottom-4 right-4">
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <button
            className={`
              w-12 rounded-full bg-teal-900 text-white transition-all
            focus-visible:outline-white data-[state=open]:rotate-45`}
          >
            <PlusIcon className="h-6 w-6" />
          </button>
        </DropdownMenu.Trigger>

        <DropdownMenu.Content side="top" align="end" sideOffset={16}>
          <DropdownMenu.Item className="gap-2">
            <ColoredExpenseIcon />
            Nova Despesa
          </DropdownMenu.Item>

          <DropdownMenu.Item className="gap-2">
            <ColoredIncomeIcon />
            Nova Receita
          </DropdownMenu.Item>

          <DropdownMenu.Item className="gap-2">
            <ColoredBankAccountIcon />
            Nova Conta
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </div>
  );
}
