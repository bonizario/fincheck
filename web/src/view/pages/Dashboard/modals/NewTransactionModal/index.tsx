import { Controller } from 'react-hook-form';

import { Button } from '@view/components/Button';
import { CurrencyInput } from '@view/components/CurrencyInput';
import { DatePickerInput } from '@view/components/DatePickerInput';
import { Input } from '@view/components/Input';
import { Modal } from '@view/components/Modal';
import { Select } from '@view/components/Select';
import { useNewTransactionModalController } from './useNewTransactionModalController';

export function NewTransactionModal() {
  const {
    bankAccounts,
    categories,
    closeNewTransactionModal,
    control,
    errors,
    handleSubmit,
    isLoading,
    isNewTransactionModalOpen,
    newTransactionType,
    register,
  } = useNewTransactionModalController();

  const isIncome = newTransactionType === 'INCOME';

  return (
    <Modal
      onClose={closeNewTransactionModal}
      open={isNewTransactionModalOpen}
      title={isIncome ? 'Nova Receita' : 'Nova Despesa'}
    >
      <form onSubmit={handleSubmit} className="space-y-10">
        <fieldset>
          <span className="text-input-label text-gray-600">
            Valor da {isIncome ? 'Receita' : 'Despesa'}
          </span>
          <div className="flex flex-row-reverse items-center gap-2">
            <Controller
              control={control}
              defaultValue="0"
              name="value"
              render={({ field: { onChange, value } }) => (
                <CurrencyInput error={errors.value?.message} onChange={onChange} value={value} />
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
            placeholder={isIncome ? 'Nome da Receita' : 'Nome da Despesa'}
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
                placeholder={isIncome ? 'Receber com' : 'Pagar com'}
                value={value}
              />
            )}
          />

          <Controller
            control={control}
            name="date"
            render={({ field: { onChange, value } }) => (
              <DatePickerInput error={errors.date?.message} onChange={onChange} value={value} />
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
