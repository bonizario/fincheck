import { Controller } from 'react-hook-form';

import { Button } from '@view/components/Button';
import { ColorsDropdownInput } from '@view/components/ColorsDropdownInput';
import { ConfirmDeleteModal } from '@view/components/ConfirmDeleteModal';
import { CurrencyInput } from '@view/components/CurrencyInput';
import { Input } from '@view/components/Input';
import { Modal } from '@view/components/Modal';
import { Select } from '@view/components/Select';
import { TrashIcon } from '@view/components/icons/TrashIcon';
import { useEditBankAccountModalController } from './useEditBankAccountModalController';

export function EditBankAccountModal() {
  const {
    closeEditBankAccountModal,
    control,
    errors,
    handleCloseConfirmDeleteModal,
    handleConfirmDelete,
    handleOpenConfirmDeleteModal,
    handleSubmit,
    isConfirmDeleteModalOpen,
    isDeletingBankAccount,
    isEditBankAccountModalOpen,
    isUpdatingBankAccount,
    register,
  } = useEditBankAccountModalController();

  return (
    <Modal
      onClose={closeEditBankAccountModal}
      open={isEditBankAccountModalOpen}
      title="Editar Conta"
      rightAction={
        <button type="button" onClick={handleOpenConfirmDeleteModal}>
          <TrashIcon className="h-6 w-6 text-red-900" />
        </button>
      }
    >
      <ConfirmDeleteModal
        isLoading={isDeletingBankAccount}
        onConfirm={handleConfirmDelete}
        description="Ao excluir a conta, também serão excluídos todos os registros de receita e despesas relacionados."
        onClose={handleCloseConfirmDeleteModal}
        open={isConfirmDeleteModalOpen}
        title="Tem certeza que deseja excluir esta conta?"
      />

      <form onSubmit={handleSubmit} className="space-y-10">
        <fieldset>
          <span className="text-input-label text-gray-600">Saldo</span>
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
            error={errors.name?.message}
            placeholder="Nome da Conta"
            type="text"
            {...register('name')}
          />

          <Controller
            control={control}
            name="type"
            render={({ field: { onChange, value } }) => (
              <Select
                error={errors.type?.message}
                onChange={onChange}
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
                placeholder="Tipo"
                value={value}
              />
            )}
          />

          <Controller
            control={control}
            name="color"
            render={({ field: { onChange, value } }) => (
              <ColorsDropdownInput
                error={errors.color?.message}
                onChange={onChange}
                value={value}
              />
            )}
          />
        </fieldset>

        <Button className="w-full" isLoading={isUpdatingBankAccount}>
          Salvar
        </Button>
      </form>
    </Modal>
  );
}
