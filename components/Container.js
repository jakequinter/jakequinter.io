import NextLink from 'next/link';
import { Avatar, Button, Flex, Box, Image } from '@chakra-ui/core';

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
          src="/logo.png"
          alt="Jake Quinter"
          maxH="50px"
          cursor="pointer"
        />
        {/* <Avatar size="md" name="Segun Adebayo" src="/jake.jpg" /> */}
      </NextLink>
      <Box>
        <NextLink href="/about" passHref>
          <Button
            as="a"
            size="sm"
            fontSize={['sm', 'md']}
            variant="ghost"
            p={[1, 6]}
          >
            ABOUT
          </Button>
        </NextLink>
        <NextLink href="/resume" passHref>
          <Button
            as="a"
            size="sm"
            fontSize={['sm', 'md']}
            variant="ghost"
            p={[1, 6]}
          >
            RESUME
          </Button>
        </NextLink>
        <NextLink href="/contact" passHref>
          <Button
            as="a"
            size="sm"
            fontSize={['sm', 'md']}
            variant="ghost"
            p={[1, 6]}
          >
            CONTACT
          </Button>
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
