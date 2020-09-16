import NextLink from 'next/link';
import { Button, Box, Flex, Link } from '@chakra-ui/core';
import { FiTwitter, FiLinkedin, FiMail } from 'react-icons/fi';
import { VscGithubAlt } from 'react-icons/vsc';

const Footer = () => (
  <Flex alignItems="center" justifyContent="center">
    {/* <Flex> */}
    <Link href="https://github.com/jakequinter" passHref>
      <Button as="a" variant="ghost">
        <Box as={VscGithubAlt} color="gray.500" size="20px" />
      </Button>
    </Link>
    <Link href="https://github.com/jakequinter" passHref>
      <Button as="a" variant="ghost">
        <Box as={FiTwitter} color="gray.400" size="20px" />
      </Button>
    </Link>
    <Link href="https://www.linkedin.com/in/jake-quinter-b9731915b/" passHref>
      <Button as="a" variant="ghost">
        <Box as={FiLinkedin} color="gray.400" size="20px" />
      </Button>
    </Link>
    <Link href="mailto:jquinter13@gmail.com" title="Email" isExternal>
      <Button as="a" variant="ghost">
        <Box as={FiMail} color="gray.400" size="20px" />
      </Button>
    </Link>
    {/* </Flex> */}
  </Flex>
);

export default Footer;
