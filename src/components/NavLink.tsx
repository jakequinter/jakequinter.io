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
          isActive ? 'text-zinc-900 dark:text-zinc-300' : ''
        } text-decoration-none hover:text-zinc-900 dark:hover:text-zinc-300`}
        onClick={() => setIsActive(!isActive)}
      >
        {text}
      </a>
    </Link>
  );
};

export default NavLink;
