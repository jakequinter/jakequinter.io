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
            ? 'md:inline-flex md:w-auto w-full px-3 py-2 rounded items-center justify-center text-blue-500 bg-blue-100 md:bg-transparent font-medium'
            : 'md:inline-flex md:w-auto w-full px-3 py-2 rounded items-center justify-center text-gray-900 hover:text-blue-500 font-medium'
        }
        onClick={() => setIsActive(!isActive)}
      >
        {text}
      </a>
    </Link>
  );
};

export default NavButton;
