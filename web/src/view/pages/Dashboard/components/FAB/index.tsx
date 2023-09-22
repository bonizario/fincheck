import { PlusIcon } from '@radix-ui/react-icons';

import { DropdownMenu } from '@view/components/DropdownMenu';

export function FAB() {
  return (
    <div className="fixed bottom-4 right-4 ">
      <DropdownMenu.Root>
        <DropdownMenu.Trigger className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-900 text-white">
          <PlusIcon className="h-6 w-6" />
        </DropdownMenu.Trigger>
        <DropdownMenu.Content side="top">
          <DropdownMenu.Item>Nova Despesa</DropdownMenu.Item>

          <DropdownMenu.Item>Nova Receita</DropdownMenu.Item>

          <DropdownMenu.Item>Nova Conta</DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </div>
  );
}
