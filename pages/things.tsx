import Container from '@/components/Container';
import LoginForm from '@/components/LoginForm';
import { useAuth } from '../lib/auth';
import UpdateSelection from '@/components/UpdateSelection';

export default function Things() {
  const auth = useAuth();

  const determineUser = () => {
    if (!auth.user || auth.user.email !== 'hello@jakequinter.io') {
      auth.signout();
      return <LoginForm />;
    } else {
      return <UpdateSelection />;
    }
  };
  return <Container>{determineUser()}</Container>;
}
