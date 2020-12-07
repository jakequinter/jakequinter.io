import React from 'react';
import { Box, Heading, Link, Tag, Text } from '@chakra-ui/core';

const Thing = ({ id, link, title, type, description }) => {
  return (
    <Box py={2} color="#484848">
      <Heading size="sm" fontWeight="medium">
        <Link color="#4970FB" isExternal href={link}>
          {title}
        </Link>
      </Heading>
      <Text as="em" fontSize="xs">
        {type}
      </Text>
      <Text>{description}</Text>
    </Box>
  );
};

export default Thing;
