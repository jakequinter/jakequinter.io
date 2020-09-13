import React from 'react';
import Head from 'next/head';
import { Flex, Box, Heading, Text, Button } from '@chakra-ui/core';

const index = () => (
  <Flex margin="0 auto" width="60%" height="100vh" alignItems="center">
    <Head>
      <title>Jake Quinter</title>
    </Head>
    <Box height="70vh">
      <Heading as="h2" size="xl" textAlign="left">
        Hi, I'm Jake.
      </Heading>
      <Text fontSize="lg" color="#484848">
        I’m a developer, tech enthusiast and life long student.
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
  </Flex>
);

export default index;
