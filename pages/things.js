import React from 'react';

import Container from '@/components/Container';
import ThingsForm from '@/components/ThingsForm';
import LoginForm from '@/components/LoginForm';
import { useAuth } from '../lib/auth';
import UpdateSelection from '@/components/UpdateSelection';

const things = () => {
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
};

export default things;
