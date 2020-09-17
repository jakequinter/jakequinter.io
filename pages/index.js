import React from 'react';
import Head from 'next/head';
import { Flex, Box, Heading, Text, Stack, Button } from '@chakra-ui/core';

import Container from '@/components/Container';

const index = () => (
  <Container>
    <Stack
      as="main"
      spacing={8}
      justifyContent="center"
      alignItems="stretch"
      m="0 0 4rem 0"
      maxWidth="2000px"
    >
      <Head>
        <title>Jake Quinter</title>
      </Head>
      <Box
        m="0 auto"
        justifyItems="center"
        minH="Calc(100vh - 40px - 82px);"
        width={{ xs: '90%', sm: '90%', md: '50%' }}
        position="relative"
      >
        <Box
          w="100%"
          mt="8"
          position="absolute"
          top="41%"
          transform="translateY(-41%)"
        >
          <Heading as="h2" size="xl" textAlign="left">
            Hi, I'm Jake.
          </Heading>
          <Text fontSize="lg" color="#484848">
            Developer, tech enthusiast and life long student.
          </Text>
          <Button
            mt={8}
            variant="solid"
            size="md"
            color="#333"
            backgroundColor="gray.200"
          >
            Get In Touch
          </Button>
        </Box>
      </Box>
    </Stack>
  </Container>
);

export default index;
