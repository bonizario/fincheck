import { Button } from '@view/components/Button';
import { ColorsDropdownInput } from '@view/components/ColorsDropdownInput';
import { Input } from '@view/components/Input';
import { InputCurrency } from '@view/components/InputCurrency';
import { Modal } from '@view/components/Modal';
import { Select } from '@view/components/Select';
import { useNewBankAccountModalController } from './useNewBankAccountModalController';

export function NewBankAccountModal() {
  const { closeNewBankAccountModal, isNewBankAccountModalOpen } =
    useNewBankAccountModalController();

  return (
    <Modal onClose={closeNewBankAccountModal} open={isNewBankAccountModalOpen} title="Nova Conta">
      <form onSubmit={() => {}} className="space-y-10">
        <fieldset>
          <span className="text-input-label text-gray-600">Saldo</span>
          <div className="flex flex-row-reverse items-center gap-2">
            <InputCurrency />
            <span className="text-lg-normal text-gray-600 peer-focus:text-lg-medium peer-focus:text-teal-900">
              R$
            </span>
          </div>
        </fieldset>

        <fieldset className="space-y-4">
          <Input name="name" type="text" placeholder="Nome da Conta" error="" />

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
          />

          <ColorsDropdownInput />
        </fieldset>

        <Button className="w-full">Salvar</Button>
      </form>
    </Modal>
  );
}
