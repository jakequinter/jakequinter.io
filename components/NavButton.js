import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const NavButton = ({ href, text }) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (window.location.pathname === href) setIsActive(true);
  }, []);

  return (
    <Link href={href} passHref>
      <a
        className={
          isActive
            ? 'text-sm xs:text-base text-blue-500 font-medium'
            : 'text-sm xs:text-base text-gray-900 hover:text-blue-500 font-medium'
        }
        onClick={() => setIsActive(!isActive)}
      >
        {text}
      </a>
    </Link>
  );
};

export default NavButton;
