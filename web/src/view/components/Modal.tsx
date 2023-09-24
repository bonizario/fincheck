import * as RadixDialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';

type ModalProps = {
  children: React.ReactNode;
  onClose?: () => void;
  open: boolean;
  rightAction?: React.ReactNode;
  title: string;
};

export function Modal({ children, onClose, open, rightAction, title }: ModalProps) {
  return (
    <RadixDialog.Root open={open} onOpenChange={onClose}>
      <RadixDialog.Portal>
        <RadixDialog.Overlay
          className={`
            fixed inset-0 z-30 bg-black/75 backdrop-blur-sm
            data-[state=open]:animate-overlay-show`}
        />

        <RadixDialog.Content
          onOpenAutoFocus={event => event.preventDefault()}
          className={`
            fixed left-1/2 top-1/2 z-40 w-full max-w-[25rem] -translate-x-1/2 -translate-y-1/2
            space-y-10 rounded-2xl bg-white p-6 text-gray-800 shadow-[0_11px_20px_0_rgba(0,0,0,0.1)]
            data-[state=open]:animate-content-show`}
        >
          <header className="flex h-12 items-center justify-between">
            <button onClick={onClose} className="flex h-12 w-12 items-center justify-center">
              <Cross2Icon className="h-6 w-6" />
            </button>

            <span className="text-h4">{title}</span>

            <div className="flex h-12 w-12 items-center justify-center">{rightAction}</div>
          </header>

          {children}
        </RadixDialog.Content>
      </RadixDialog.Portal>
    </RadixDialog.Root>
  );
}
