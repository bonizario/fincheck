import * as RadixDropdownMenu from '@radix-ui/react-dropdown-menu';

import { cn } from '@app/utils/cn';

type DropdownMenuItemProps = {
  children: React.ReactNode;
  className?: string;
  onSelect?: () => void;
};

type DropdownMenuContentProps = {
  children: React.ReactNode;
  className?: string;
};

export function DropdownMenuRoot({ children }: { children: React.ReactNode }) {
  return <RadixDropdownMenu.Root>{children}</RadixDropdownMenu.Root>;
}

export function DropdownMenuTrigger({ children }: { children: React.ReactNode }) {
  return (
    <RadixDropdownMenu.Trigger className="rounded-full focus:outline-dashed focus:outline-1 focus:outline-teal-900">
      {children}
    </RadixDropdownMenu.Trigger>
  );
}

export function DropdownMenuContent({ children, className }: DropdownMenuContentProps) {
  return (
    <RadixDropdownMenu.Portal>
      <RadixDropdownMenu.Content
        className={cn(
          'cursor-pointer select-none space-y-2 rounded-2xl bg-white p-2 shadow-[0_11px_20px_0_rgba(0,0,0,0.10)] data-[side=bottom]:animate-slide-up-and-fade',
          className
        )}
      >
        {children}
      </RadixDropdownMenu.Content>
    </RadixDropdownMenu.Portal>
  );
}

export function DropdownMenuItem({ children, className, onSelect }: DropdownMenuItemProps) {
  return (
    <RadixDropdownMenu.Item
      onSelect={onSelect}
      className={cn(
        'flex min-h-[3rem] cursor-pointer select-none items-center rounded-xl px-4 py-2 text-sm text-gray-800 outline-none transition-colors data-[highlighted]:bg-gray-50',
        className
      )}
    >
      {children}
    </RadixDropdownMenu.Item>
  );
}

export const DropdownMenu = {
  Root: DropdownMenuRoot,
  Trigger: DropdownMenuTrigger,
  Content: DropdownMenuContent,
  Item: DropdownMenuItem,
};
