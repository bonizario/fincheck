import { Logo } from '@view/components/Logo';
import { UserMenu } from '@view/components/UserMenu';
import { BankAccounts } from './components/BankAccounts';
import { DashboardProvider } from './components/DashboardContext';
import { FAB } from './components/FAB';
import { Transactions } from './components/Transactions';

export function Dashboard() {
  return (
    <DashboardProvider>
      <div className="flex w-full flex-col gap-4 p-4 md:h-full md:px-8 md:pb-8">
        <header className="flex h-12 items-center justify-between">
          <Logo className="h-6 text-teal-900" />

          <UserMenu />
        </header>

        <main className="flex flex-1 flex-col gap-4 md:flex-row">
          <section className="w-full md:w-1/2">
            <BankAccounts />
          </section>

          <section className="w-full md:w-1/2">
            <Transactions />
          </section>
        </main>

        <FAB />
      </div>
    </DashboardProvider>
  );
}
