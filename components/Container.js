import NextLink from 'next/link';
import { Button, Box, Flex, Image } from '@chakra-ui/core';

import NavButton from '@/components/NavButton';
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
        <NavButton href="/about" text="About" />
        <NavButton href="/bookmarks" text="Bookmarks" />
        <NavButton href="/contact" text="Contact" />
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
