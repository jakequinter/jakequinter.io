import React from 'react';
import { Flex, Image } from '@chakra-ui/core';

const Spinner = () => (
  <Flex justifyContent="center">
    <Image src="/spinner.gif" alt="loading" size="100px" />
  </Flex>
);

export default Spinner;
