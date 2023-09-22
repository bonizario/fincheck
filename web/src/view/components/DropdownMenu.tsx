import * as RadixDropdownMenu from '@radix-ui/react-dropdown-menu';

import { cn } from '@app/utils/cn';

type DropdownMenuTriggerProps = {
  children: React.ReactNode;
  className?: string;
};

type DropdownMenuContentProps = {
  children: React.ReactNode;
  className?: string;
  side?: RadixDropdownMenu.DropdownMenuContentProps['side'];
};

type DropdownMenuItemProps = {
  children: React.ReactNode;
  className?: string;
  onSelect?: () => void;
};

export function DropdownMenuRoot({ children }: { children: React.ReactNode }) {
  return <RadixDropdownMenu.Root>{children}</RadixDropdownMenu.Root>;
}

export function DropdownMenuTrigger({ children, className }: DropdownMenuTriggerProps) {
  return (
    <RadixDropdownMenu.Trigger
      className={cn('select-none rounded-full focus:outline-none', className)}
    >
      {children}
    </RadixDropdownMenu.Trigger>
  );
}

export function DropdownMenuContent({
  children,
  className,
  side = 'bottom',
}: DropdownMenuContentProps) {
  return (
    <RadixDropdownMenu.Portal>
      <RadixDropdownMenu.Content
        sideOffset={8}
        side={side}
        className={cn(
          'z-20 cursor-pointer select-none space-y-2 rounded-2xl bg-white p-2 shadow-[0_11px_20px_0_rgba(0,0,0,0.10)]',
          'data-[side=bottom]:animate-slide-up-and-fade',
          'data-[side=top]:animate-slide-down-and-fade',
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
        'flex min-h-[3rem] cursor-pointer select-none items-center rounded-xl px-4 py-2 text-sm text-gray-800 transition-colors focus:outline-none data-[highlighted]:bg-gray-50',
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
