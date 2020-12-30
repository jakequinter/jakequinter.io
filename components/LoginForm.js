import React from 'react';
import Head from 'next/head';

import { useAuth } from '@/lib/auth';

const LoginForm = () => {
  const auth = useAuth(0);

  return (
    <div className="flex-row justify-between items-center mx-auto">
      <Head>
        <title>Jake Quinter | Things</title>
      </Head>
      {/* <Alert status="warning">
        <AlertIcon />
        This page is intended for the developer and owner of this site only!
      </Alert> */}
      <div className="flex justify-center">
        <button
          // w="60%"
          // leftIcon="google"
          // backgroundColor="white"
          // color="gray.900"
          // variant="outline"
          // fontWeight="medium"
          // _hover={{ bg: 'gray.100' }}
          // _active={{ bg: 'gray.100', transform: 'scale(0.95' }}
          // size="md"
          // mt={12}
          onClick={() => auth.signinWithGoogle()}
        >
          Sign In with Google
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
