import { Controller } from 'react-hook-form';

import { TRANSACTION_TYPE } from '@app/config/constants';
import { type TransactionType } from '@app/entities/Transaction';
import { Button } from '@view/components/Button';
import { CurrencyInput } from '@view/components/CurrencyInput';
import { DatePickerInput } from '@view/components/DatePickerInput';
import { Input } from '@view/components/Input';
import { Modal } from '@view/components/Modal';
import { Select } from '@view/components/Select';
import { useEditTransactionModalController } from './useEditTransactionModalController';

type EditTransactionModalProps = {
  onClose: () => void;
  open: boolean;
  transactionType: TransactionType;
};

export function EditTransactionModal({
  onClose,
  open,
  transactionType,
}: EditTransactionModalProps) {
  const {
    bankAccounts,
    categories,
    control,
    errors,
    handleSubmit,
    isLoading,
    register,
  } = useEditTransactionModalController(transactionType);

  return (
    <Modal
      onClose={onClose}
      open={open}
      title={`Editar ${TRANSACTION_TYPE[transactionType]}`}
    >
      <form onSubmit={handleSubmit} className="space-y-10">
        <fieldset>
          <span className="text-input-label text-gray-600">
            Valor da {TRANSACTION_TYPE[transactionType]}
          </span>
          <div className="flex flex-row-reverse items-center gap-2">
            <Controller
              control={control}
              defaultValue="0"
              name="value"
              render={({ field: { onChange, value } }) => (
                <CurrencyInput
                  error={errors.value?.message}
                  onChange={onChange}
                  value={value}
                />
              )}
            />
            <span className="text-lg-normal text-gray-600 peer-focus-within:text-lg-medium peer-focus-within:text-teal-900">
              R$
            </span>
          </div>
        </fieldset>

        <fieldset className="space-y-4">
          <Input
            error={errors.name?.message}
            placeholder={`Nome da ${TRANSACTION_TYPE[transactionType]}`}
            type="text"
            {...register('name')}
          />

          <Controller
            control={control}
            name="categoryId"
            render={({ field: { onChange, value } }) => (
              <Select
                error={errors.categoryId?.message}
                onChange={onChange}
                options={categories.map(category => ({
                  label: category.name,
                  value: category.id,
                }))}
                placeholder="Categoria"
                value={value}
              />
            )}
          />

          <Controller
            control={control}
            name="bankAccountId"
            render={({ field: { onChange, value } }) => (
              <Select
                error={errors.bankAccountId?.message}
                onChange={onChange}
                options={bankAccounts.map(bankAccount => ({
                  label: bankAccount.name,
                  value: bankAccount.id,
                }))}
                placeholder={
                  transactionType === 'INCOME' ? 'Receber com' : 'Pagar com'
                }
                value={value}
              />
            )}
          />

          <Controller
            control={control}
            name="date"
            render={({ field: { onChange, value } }) => (
              <DatePickerInput
                error={errors.date?.message}
                onChange={onChange}
                value={value}
              />
            )}
          />
        </fieldset>

        <Button className="w-full" type="submit" isLoading={isLoading}>
          Salvar
        </Button>
      </form>
    </Modal>
  );
}
