import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import { styled } from '../stitches.config';
import { link } from '@/styles/link';

// const ALink = styled('a', {
//   display: 'inline-flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   width: 'auto',
//   cursor: 'default',
//   '&:hover': {
//     color: '$gray300'
//   },

// variants: {
//   color: {
//     active: { color: '$gray200' }
//   }
// }
// });

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
