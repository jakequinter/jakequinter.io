import React from 'react';
import { Flex, Box, Heading, Text, Button } from '@chakra-ui/core';

const index = () => (
  <Flex margin="0 auto" width="60%" alignItems="center">
    <Box mt="200px">
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
