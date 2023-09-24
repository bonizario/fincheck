import { useDashboard } from '../../components/DashboardContext/useDashboard';

export function useNewBankAccountModalController() {
  const { closeNewBankAccountModal, isNewBankAccountModalOpen } = useDashboard();

  return { closeNewBankAccountModal, isNewBankAccountModalOpen };
}
