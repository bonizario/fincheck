import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';

import { cn } from '@app/utils/cn';
import { Button } from '@view/components/Button';
import { Modal } from '@view/components/Modal';
import { useFiltersModal } from './useFiltersModal';

type FiltersModalProps = {
  onClose: () => void;
  open: boolean;
};

const mockedBankAccounts = [
  { id: '456', name: 'XP Investimentos' },
  { id: '123', name: 'Nubank' },
  { id: '789', name: 'Inter' },
];

export function FiltersModal({ onClose, open }: FiltersModalProps) {
  const { handleChangeYear, handleSelectBankAccount, selectedBankAccountId, selectedYear } =
    useFiltersModal();

  return (
    <Modal open={open} onClose={onClose} title="Filtros">
      <section className="flex flex-col gap-2 text-gray-800">
        <strong className="block text-lg font-bold tracking-[-1px]">Conta</strong>

        {mockedBankAccounts.map(bankAccount => (
          <button
            onClick={() => handleSelectBankAccount(bankAccount.id)}
            key={bankAccount.id}
            className={cn(
              'w-full rounded-2xl p-2 text-left text-sm leading-normal transition-colors hover:bg-gray-50',
              bankAccount.id === selectedBankAccountId && '!bg-gray-200'
            )}
          >
            {bankAccount.name}
          </button>
        ))}
      </section>

      <section className="flex flex-col gap-2 text-gray-800">
        <strong className="block text-lg font-bold tracking-[-1px]">Ano</strong>

        <div className="flex w-[13.125rem] items-center justify-between">
          <button
            onClick={() => handleChangeYear(-1)}
            className="flex h-12 w-12 items-center justify-center"
          >
            <ChevronLeftIcon className="h-6 w-6" />
          </button>

          <span className="flex-1 text-center text-sm font-medium leading-snug tracking-[-0.5px]">
            {selectedYear}
          </span>

          <button
            onClick={() => handleChangeYear(1)}
            className="flex h-12 w-12 items-center justify-center"
          >
            <ChevronRightIcon className="h-6 w-6" />
          </button>
        </div>
      </section>

      <Button className="w-full">Aplicar Filtros</Button>
    </Modal>
  );
}
