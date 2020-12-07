import React from 'react';
import Head from 'next/head';
import { Box, Button, Divider, Heading, Text, Stack } from '@chakra-ui/core';

import Container from '@/components/Container';

const index = () => (
  <Container>
    <Stack
      as="main"
      spacing={8}
      justifyContent="center"
      alignItems="flex-start"
      y
      m="0 0 4rem 0"
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
          textAlign="center"
          w="100%"
          my="4"
          position="absolute"
          top="35%"
          transform="translateY(-35%)"
        >
          <Heading as="h2" size="2xl" my="4">
            Hi, I'm Jake.
          </Heading>
          <Divider width="50%" pb="4" margin="0 auto" borderColor="##000" />
          <Text fontSize="lg" color="#484848" my="8">
            Developer, tech enthusiast and life long student.
          </Text>
          <Button
            as="a"
            href="/contact"
            variant="solid"
            size="md"
            color="#fff"
            backgroundColor="#4970FB"
            _hover={{
              backgroundColor: '#8DA6FC'
            }}
          >
            Get In Touch
          </Button>
        </Box>
      </Box>
    </Stack>
  </Container>
);

export default index;
