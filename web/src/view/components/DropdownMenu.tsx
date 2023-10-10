import * as RadixDropdownMenu from '@radix-ui/react-dropdown-menu';

import { cn } from '@app/utils/cn';

type DropdownMenuTriggerProps = {
  children: React.ReactNode;
  className?: string;
};

type DropdownMenuContentProps = {
  children: React.ReactNode;
  className?: string;
  align?: RadixDropdownMenu.DropdownMenuContentProps['align'];
  side?: RadixDropdownMenu.DropdownMenuContentProps['side'];
  sideOffset?: RadixDropdownMenu.DropdownMenuContentProps['sideOffset'];
};

type DropdownMenuItemProps = {
  children: React.ReactNode;
  className?: string;
  onSelect?: () => void;
};

export function DropdownMenuRoot({ children }: { children: React.ReactNode }) {
  return (
    <RadixDropdownMenu.Root modal={false}>{children}</RadixDropdownMenu.Root>
  );
}

export function DropdownMenuTrigger({
  children,
  className,
}: DropdownMenuTriggerProps) {
  return (
    <RadixDropdownMenu.Trigger
      asChild
      className={cn('flex h-12 select-none items-center', className)}
    >
      {children}
    </RadixDropdownMenu.Trigger>
  );
}

export function DropdownMenuContent({
  children,
  className,
  align = 'start',
  side = 'bottom',
  sideOffset = 8,
}: DropdownMenuContentProps) {
  return (
    <RadixDropdownMenu.Portal>
      <RadixDropdownMenu.Content
        align={align}
        onCloseAutoFocus={event => event.preventDefault()}
        side={side}
        sideOffset={sideOffset}
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

export function DropdownMenuItem({
  children,
  className,
  onSelect,
}: DropdownMenuItemProps) {
  return (
    <RadixDropdownMenu.Item
      onSelect={onSelect}
      className={cn(
        'flex min-h-[3rem] cursor-pointer select-none items-center rounded-xl p-2 text-sm-normal text-gray-800',
        'transition-colors hover:outline-none data-[highlighted]:bg-gray-100',
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
