import Container from '@/components/Container';
import LoginForm from '@/components/LoginForm';
import UpdateSelection from '@/components/UpdateSelection';
import { useSession } from 'next-auth/react';

export default function Things() {
  const { data: session } = useSession();

  if (session && session.user?.email === 'hello@jakequinter.io') {
    return (
      <Container>
        <UpdateSelection />
      </Container>
    );
  }

  return (
    <Container>
      <LoginForm />
    </Container>
  );
}
