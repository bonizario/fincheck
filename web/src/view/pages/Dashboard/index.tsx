import { useAuth } from '../../../app/hooks/useAuth';
import { Button } from '../../components/Button';

export function Dashboard() {
  const { signOut } = useAuth();

  return (
    <>
      <h1>Dashboard</h1>
      <Button type="button" onClick={signOut}>
        Sair
      </Button>
    </>
  );
}
