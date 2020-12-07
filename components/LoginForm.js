import React from 'react';
import Head from 'next/head';
import { Alert, AlertIcon, Box, Button, Flex } from '@chakra-ui/core';

import { useAuth } from '@/lib/auth';

const LoginForm = () => {
  const auth = useAuth(0);

  return (
    <Box
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      maxWidth="900px"
      minH="Calc(100vh - 40px - 82px);"
      width="100%"
      py={8}
      mb={8}
      mx="auto"
    >
      <Head>
        <title>Jake Quinter | Things</title>
      </Head>
      <Alert status="warning">
        <AlertIcon />
        This page is intended for the developer and owner of this site only!
      </Alert>
      <Flex justifyContent="center">
        <Button
          w="60%"
          leftIcon="google"
          backgroundColor="white"
          color="gray.900"
          variant="outline"
          fontWeight="medium"
          _hover={{ bg: 'gray.100' }}
          _active={{ bg: 'gray.100', transform: 'scale(0.95' }}
          size="md"
          mt={12}
          onClick={() => auth.signinWithGoogle()}
        >
          Sign In with Google
        </Button>
      </Flex>
    </Box>
  );
};

export default LoginForm;
