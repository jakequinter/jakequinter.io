import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface NavButtonProps {
  href: string;
  text: string;
}

const NavButton = ({ href, text }: NavButtonProps) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (window.location.pathname === href) setIsActive(true);
  }, []);

  return (
    <Link href={href}>
      <a
        className={`${
          isActive ? 'text-gray-900 font-medium' : 'text-gray-500'
        } text-decoration-none`}
        onClick={() => setIsActive(!isActive)}
      >
        {text}
      </a>
    </Link>
  );
};

export default NavButton;
