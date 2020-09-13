import React from 'react';
import { Avatar, Flex, Link } from '@chakra-ui/core';

// import jake from '../public/static/images/jake.jpg';

const DashboardShell = ({ children }) => {
  return (
    <Flex flexDirection="column">
      <Flex
        margin="0 auto"
        w="70%"
        // backgroundColor="white"
        alignItems="center"
        justifyContent="space-between"
        py={4}
        px={8}
      >
        <Flex>
          <Link href="/">
            <Avatar size="xs" name="Jake Quinter" src="/jake.jpg" />
          </Link>
        </Flex>
        <Flex>
          <Link mr={8} href="/about">
            ABOUT
          </Link>
          <Link mr={8} href="/resume">
            RESUME
          </Link>
          <Link href="/contact">CONTACT</Link>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default DashboardShell;
