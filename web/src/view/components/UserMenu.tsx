import { ExitIcon } from '@radix-ui/react-icons';

import { useAuth } from '@app/hooks/useAuth';
import { DropdownMenu } from './DropdownMenu';

export function UserMenu() {
  const { signOut } = useAuth();

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="w-12 border border-teal-100 bg-teal-0">
        <span className="text-sm font-medium tracking-[-0.5px] text-teal-900">GB</span>
      </DropdownMenu.Trigger>

      <DropdownMenu.Content className="w-28" align="end" sideOffset={16}>
        <DropdownMenu.Item onSelect={signOut} className="flex items-center justify-between">
          Sair
          <ExitIcon className="h-4 w-4" />
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
