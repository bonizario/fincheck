import * as RadixPopover from '@radix-ui/react-popover';

import { cn } from '@app/utils/cn';

type PopoverContentProps = {
  children: React.ReactNode;
  className?: string;
};

export function PopoverRoot({ children }: { children: React.ReactNode }) {
  return <RadixPopover.Root>{children}</RadixPopover.Root>;
}

export function PopoverTrigger({ children }: { children: React.ReactNode }) {
  return <RadixPopover.Trigger asChild>{children}</RadixPopover.Trigger>;
}

export function PopoverContent({ children, className }: PopoverContentProps) {
  return (
    <RadixPopover.Portal>
      <RadixPopover.Content
        className={cn(
          'space-y-2 rounded-2xl bg-white p-2 shadow-[0_11px_20px_0_rgba(0,0,0,0.10)]',
          'data-[side=bottom]:animate-slide-up-and-fade',
          'data-[side=top]:animate-slide-down-and-fade',
          className
        )}
      >
        {children}
      </RadixPopover.Content>
    </RadixPopover.Portal>
  );
}

export const Popover = {
  Root: PopoverRoot,
  Trigger: PopoverTrigger,
  Content: PopoverContent,
};
