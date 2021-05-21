import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import { link } from '@/styles/link';

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
        className={
          isActive ? link({ type: 'active' }) : link({ type: 'unactive' })
        }
        onClick={() => setIsActive(!isActive)}
      >
        {text}
      </a>
    </Link>
  );
};

export default NavButton;
