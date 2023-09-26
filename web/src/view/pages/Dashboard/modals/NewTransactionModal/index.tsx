import { Button } from '@view/components/Button';
import { Input } from '@view/components/Input';
import { InputCurrency } from '@view/components/InputCurrency';
import { Modal } from '@view/components/Modal';
import { Select } from '@view/components/Select';
import { useNewTransactionModalController } from './useNewTransactionModalController';

export function NewTransactionModal() {
  const { closeNewTransactionModal, isNewTransactionModalOpen, newTransactionType } =
    useNewTransactionModalController();

  const isIncome = newTransactionType === 'income';

  return (
    <Modal
      onClose={closeNewTransactionModal}
      open={isNewTransactionModalOpen}
      title={isIncome ? 'Nova Receita' : 'Nova Despesa'}
    >
      <form onSubmit={() => {}} className="space-y-10">
        <fieldset>
          <span className="text-input-label text-gray-600">
            Valor da {isIncome ? 'Receita' : 'Despesa'}
          </span>
          <div className="flex flex-row-reverse items-center gap-2">
            <InputCurrency />
            <span className="text-lg-normal text-gray-600 peer-focus:text-lg-medium peer-focus:text-teal-900">
              R$
            </span>
          </div>
        </fieldset>

        <fieldset className="space-y-4">
          <Input
            name="name"
            type="text"
            placeholder={isIncome ? 'Nome da Receita' : 'Nome da Despesa'}
          />

          <Select
            placeholder="Categoria"
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

          <Select
            placeholder={isIncome ? 'Receber com' : 'Pagar com'}
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
        </fieldset>

        <Button className="w-full">Salvar</Button>
      </form>
    </Modal>
  );
}
