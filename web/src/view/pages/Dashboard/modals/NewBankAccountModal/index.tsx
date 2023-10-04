import { Controller } from 'react-hook-form';

import { Button } from '@view/components/Button';
import { ColorsDropdownInput } from '@view/components/ColorsDropdownInput';
import { CurrencyInput } from '@view/components/CurrencyInput';
import { Input } from '@view/components/Input';
import { Modal } from '@view/components/Modal';
import { Select } from '@view/components/Select';
import { useNewBankAccountModal } from './useNewBankAccountModal';

export function NewBankAccountModal() {
  const {
    closeNewBankAccountModal,
    control,
    errors,
    handleSubmit,
    isNewBankAccountModalOpen,
    register,
  } = useNewBankAccountModal();

  return (
    <Modal onClose={closeNewBankAccountModal} open={isNewBankAccountModalOpen} title="Nova Conta">
      <form onSubmit={handleSubmit} className="space-y-10">
        <fieldset>
          <span className="text-input-label text-gray-600">Saldo Inicial</span>
          <div className="flex flex-row-reverse items-center gap-2">
            <Controller
              control={control}
              defaultValue="0"
              name="initialBalance"
              render={({ field: { onChange, value } }) => (
                <CurrencyInput
                  error={errors.initialBalance?.message}
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
            type="text"
            placeholder="Nome da Conta"
            error={errors.name?.message}
            {...register('name')}
          />

          <Select
            placeholder="Tipo"
            options={[
              {
                value: 'CHECKING',
                label: 'Conta Corrente',
              },
              {
                value: 'INVESTMENT',
                label: 'Investimentos',
              },
              {
                value: 'CASH',
                label: 'Dinheiro Físico',
              },
            ]}
            error={errors.type?.message}
          />

          <ColorsDropdownInput error={errors.color?.message} />
        </fieldset>

        <Button className="w-full">Salvar</Button>
      </form>
    </Modal>
  );
}
