import NextLink from 'next/link';
import { Avatar, Button, Flex, Box, Image, Link } from '@chakra-ui/core';

import Footer from './Footer';

const Container = ({ children }) => (
  <>
    <Flex
      margin="0 auto"
      w={{ xs: '100%', md: '70%' }}
      maxWidth="1500px"
      alignItems="center"
      justifyContent="space-between"
      py={4}
      px={4}
    >
      <NextLink href="/">
        <Image
          src="/logo.svg"
          alt="Jake Quinter"
          maxH="50px"
          cursor="pointer"
        />
      </NextLink>
      <Box>
        <NextLink href="/about" passHref>
          <Button
            as="a"
            size="sm"
            fontSize={['md', 'lg']}
            variant="ghost"
            p={[1, 6]}
          >
            About
          </Button>
        </NextLink>
        <NextLink href="/bookmarks" passHref>
          <Button
            as="a"
            size="sm"
            fontSize={['md', 'lg']}
            variant="ghost"
            p={[1, 6]}
          >
            Bookmarks
          </Button>
        </NextLink>
        <NextLink href="/contact" passHref>
          <Button
            as="a"
            size="sm"
            fontSize={['md', 'lg']}
            variant="ghost"
            p={[1, 6]}
          >
            Contact
          </Button>
        </NextLink>
        <NextLink href="/resume.pdf" passHref>
          <a target="_blank">
            <Button
              size="sm"
              fontSize={['md', 'lg']}
              variant="ghost"
              p={[1, 6]}
              _is
            >
              Resume
            </Button>
          </a>
        </NextLink>
      </Box>
    </Flex>
    <Flex as="main" justifyContent="center" flexDirection="column" px={4}>
      {children}
      <Footer />
    </Flex>
  </>
);

export default Container;
