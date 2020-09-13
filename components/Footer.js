import { Flex, Link, IconButton } from '@chakra-ui/core';
import styles from '../styles/Home.module.css';

const Footer = () => (
  <Flex className={styles.footer} align="center" mb="4" direction="column">
    <div>
      <Link href="https://twitter.com/jakequinter">
        <IconButton
          variant="ghost"
          variantColor="gray"
          aria-label="Send email"
          icon="email"
        />
      </Link>
      <Link href="https://twitter.com/jakequinter">
        <IconButton
          variant="ghost"
          variantColor="gray"
          aria-label="Send email"
          icon="email"
        />
      </Link>
      <Link href="https://twitter.com/jakequinter">
        <IconButton
          variant="ghost"
          variantColor="gray"
          aria-label="Send email"
          icon="email"
        />
      </Link>
      <Link href="https://twitter.com/jakequinter">
        <IconButton
          variant="ghost"
          variantColor="gray"
          aria-label="Send email"
          icon="email"
        />
      </Link>
    </div>
  </Flex>
);

export default Footer;
