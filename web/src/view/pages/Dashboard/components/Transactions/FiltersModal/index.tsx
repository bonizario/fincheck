import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';

import { cn } from '@app/utils/cn';
import { Button } from '@view/components/Button';
import { Modal } from '@view/components/Modal';
import { useFiltersModalController } from './useFiltersModalController';

type FiltersModalProps = {
  onApplyFilters: (filters: { bankAccountId: string | undefined; year: number }) => void;
  onClose: () => void;
  open: boolean;
};

export function FiltersModal({ onApplyFilters, onClose, open }: FiltersModalProps) {
  const {
    bankAccounts,
    handleChangeYear,
    handleSelectBankAccount,
    selectedBankAccountId,
    selectedYear,
  } = useFiltersModalController();

  return (
    <Modal open={open} onClose={onClose} title="Filtros">
      <section className="flex flex-col gap-2">
        <strong className="block text-h4">Conta</strong>

        {bankAccounts.map(bankAccount => (
          <button
            onClick={() => handleSelectBankAccount(bankAccount.id)}
            key={bankAccount.id}
            className={cn(
              'w-full rounded-2xl p-2 text-left text-sm-normal transition-colors hover:bg-gray-100/75',
              bankAccount.id === selectedBankAccountId && '!bg-gray-200'
            )}
          >
            {bankAccount.name}
          </button>
        ))}
      </section>

      <section className="flex flex-col gap-2">
        <strong className="block text-h4">Ano</strong>

        <div className="flex w-[13.125rem] items-center justify-between self-center">
          <button
            onClick={() => handleChangeYear(-1)}
            className="flex h-12 w-12 items-center justify-center"
          >
            <ChevronLeftIcon className="h-6 w-6" />
          </button>

          <span className="flex-1 text-center text-button-sm">{selectedYear}</span>

          <button
            onClick={() => handleChangeYear(1)}
            className="flex h-12 w-12 items-center justify-center"
          >
            <ChevronRightIcon className="h-6 w-6" />
          </button>
        </div>
      </section>

      <Button
        className="w-full"
        onClick={() => onApplyFilters({ bankAccountId: selectedBankAccountId, year: selectedYear })}
      >
        Aplicar Filtros
      </Button>
    </Modal>
  );
}
