import { ExitIcon } from '@radix-ui/react-icons';

import { useAuth } from '@app/hooks/useAuth';
import { DropdownMenu } from './DropdownMenu';

export function UserMenu() {
  const { signOut } = useAuth();

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <button className="w-12 rounded-full border border-teal-100 bg-teal-0">
          <span className="text-sm-medium text-teal-900">GB</span>
        </button>
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
