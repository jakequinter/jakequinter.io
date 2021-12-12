import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface NavButtonProps {
  href: string;
  text: string;
}

const NavLink = ({ href, text }: NavButtonProps) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (window.location.pathname === href) setIsActive(true);
  }, []);

  return (
    <Link href={href}>
      <a
        className={`${
          isActive ? 'text-gray-900 dark:text-darkgray-900' : ''
        } text-decoration-none hover:text-gray-900 dark:hover:text-darkgray-900`}
        onClick={() => setIsActive(!isActive)}
      >
        {text}
      </a>
    </Link>
  );
};

export default NavLink;
