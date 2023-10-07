import { Button } from './Button';
import { Modal } from './Modal';
import { TrashIcon } from './icons/TrashIcon';

type ConfirmDeleteModalProps = {
  description?: string;
  isLoading: boolean;
  onClose: () => void;
  onConfirm: () => void;
  open: boolean;
  title: string;
};

export function ConfirmDeleteModal({
  description,
  isLoading,
  onClose,
  onConfirm,
  open,
  title,
}: ConfirmDeleteModalProps) {
  return (
    <Modal onClose={onClose} open={open} title="Excluir">
      <div className="flex flex-col items-center gap-6 text-center">
        <div className="flex h-[3.25rem] w-[3.25rem] items-center justify-center rounded-full bg-red-0">
          <TrashIcon className="h-6 w-6 text-red-900" />
        </div>
        <p className="max-w-[11.25rem] text-base-bold">{title}</p>
        {description && <p className="text-base-normal">{description}</p>}
      </div>
      <div className="space-y-4">
        <Button className="w-full" variant="danger" isLoading={isLoading} onClick={onConfirm}>
          Sim, desejo excluir
        </Button>
        <Button className="w-full" variant="ghost" disabled={isLoading} onClick={onClose}>
          Cancelar
        </Button>
      </div>
    </Modal>
  );
}
