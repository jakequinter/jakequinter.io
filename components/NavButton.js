import React, { useState, useEffect } from 'react';
import NextLink from 'next/link';
import { Button } from '@chakra-ui/core';

const NavButton = ({ href, text }) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (window.location.pathname === href) setIsActive(true);
  }, []);

  return (
    <NextLink href={href} passHref>
      <Button
        as="a"
        size="sm"
        fontSize={['md', 'lg']}
        variant="ghost"
        p={[1, 6]}
        color={isActive ? '#4970FB' : '#1A202C'}
        onClick={() => setIsActive(!isActive)}
      >
        {text}
      </Button>
    </NextLink>
  );
};

export default NavButton;
