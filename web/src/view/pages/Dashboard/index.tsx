import { BankAccounts } from './components/BankAccounts';
import { Transactions } from './components/Transactions';
import { Logo } from '../../components/Logo';
import { UserMenu } from '../../components/UserMenu';

export function Dashboard() {
  return (
    <div className="flex h-full w-full flex-col gap-4 p-4 md:px-8 md:pb-8 md:pt-6">
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
    </div>
  );
}
