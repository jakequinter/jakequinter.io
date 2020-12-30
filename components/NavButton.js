import React, { useState, useEffect } from 'react';
import NextLink from 'next/link';

const NavButton = ({ href, text }) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (window.location.pathname === href) setIsActive(true);
  }, []);

  return (
    <NextLink href={href} passHref>
      <a
        className={
          isActive
            ? 'text-sm xs:text-lg text-blue-500 font-medium'
            : 'text-sm xs:text-lg text-gray-900 font-medium'
        }
        onClick={() => setIsActive(!isActive)}
      >
        {text}
      </a>
    </NextLink>
  );
};

export default NavButton;
