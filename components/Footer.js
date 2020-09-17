import { Flex, Link, IconButton } from '@chakra-ui/core';
import { FiGithub, FiLinkedin, FiMail, FiTwitter } from 'react-icons/fi';

const Footer = () => (
  <Flex
    alignItems="center"
    justifyContent="center"
    flexShrink="0"
    height="40px"
    textAlign="center"
  >
    <Link href="https://github.com/jakequinter" title="Email" isExternal>
      <IconButton
        aria-label="Github"
        icon={FiGithub}
        size="lg"
        color="gray.400"
        variant="ghost"
      />
    </Link>
    <Link href="https://twitter.com/jakequinter" title="Email" isExternal>
      <IconButton
        aria-label="Twitter"
        icon={FiTwitter}
        size="lg"
        color="gray.400"
        variant="ghost"
      />
    </Link>
    <Link
      href="https://www.linkedin.com/in/jake-quinter-b9731915b/"
      title="Email"
      isExternal
    >
      <IconButton
        aria-label="LinkedIn"
        icon={FiLinkedin}
        size="lg"
        color="gray.400"
        variant="ghost"
      />
    </Link>
    <Link href="mailto:quinter13@gmail.com" title="Email" isExternal>
      <IconButton
        aria-label="Email"
        icon={FiMail}
        size="lg"
        color="gray.400"
        variant="ghost"
      />
    </Link>
  </Flex>
);

export default Footer;
