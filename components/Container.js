import NextLink from 'next/link';
import { Button, Flex, Box, Image } from '@chakra-ui/core';

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
      px={8}
    >
      <NextLink href="/">
        <Image
          src="/logo.png"
          alt="Jake Quinter"
          maxH="50px"
          cursor="pointer"
        />
      </NextLink>
      <Box>
        <NextLink href="/about" passHref>
          <Button as="a" size="sm" variant="ghost" p={[1, 4]}>
            ABOUT
          </Button>
        </NextLink>
        <NextLink href="/resume" passHref>
          <Button as="a" size="sm" variant="ghost" p={[1, 4]}>
            RESUME
          </Button>
        </NextLink>
        <NextLink href="/contact" passHref>
          <Button as="a" size="sm" variant="ghost" p={[1, 4]}>
            CONTACT
          </Button>
        </NextLink>
      </Box>
    </Flex>
    <Flex as="main" justifyContent="center" flexDirection="column" px={8}>
      {children}
      <Footer />
    </Flex>
  </>
);

export default Container;
