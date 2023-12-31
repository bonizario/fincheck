import { ExitIcon } from '@radix-ui/react-icons';

import { useAuth } from '@app/hooks/useAuth';
import { getNameInitials } from '@app/utils/getNameInitials';
import { DropdownMenu } from './DropdownMenu';

export function UserMenu() {
  const { name, signOut } = useAuth();

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <button className="w-12 justify-center rounded-full border border-teal-100 bg-teal-0">
          {name && (
            <span className="text-sm-medium text-teal-900">
              {getNameInitials(name)}
            </span>
          )}
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Content className="w-28" align="end" sideOffset={16}>
        <DropdownMenu.Item
          onSelect={signOut}
          className="flex items-center justify-between"
        >
          Sair
          <ExitIcon className="h-4 w-4" />
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
