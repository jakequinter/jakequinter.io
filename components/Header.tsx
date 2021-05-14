import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';

import { box } from '../styles/box';
import NavButton from '@/components/NavButton';
import { styled } from '../stitches.config';
import useWindowSize from '@/utils/useWindowSize';

// const Nav = styled('nav', {
//   display: 'flex',
//   alignItems: 'center',
//   width: '100%'
// });

export default function Header() {
  const router = useRouter();
  const { width } = useWindowSize();
  const [isOpen, setIsOpen] = useState(false);

  const handlePageTitle = () => {
    if (router.pathname === '/') return 'Home';
    else
      return (
        router.pathname.slice(1).charAt(0).toUpperCase() +
        router.pathname.slice(2)
      );
  };

  return (
    <div>
      {!isOpen && width < 767 ? (
        <h5 className="text-gray-900 font-bold">{handlePageTitle()}</h5>
      ) : null}
      {/* <MenuButton
          className="inline-flex p-3 rounded md:hidden text-gray-900 ml-auto outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
        </MenuButton> */}
      <div
        className={box({
          display: 'flex',
          width: '100%',
          justifyContent: 'space-between',
          maxWidth: '56rem',
          mx: 'auto'
        })}
      >
        <div className={box({ display: 'flex' })}>
          <NavButton href="/" text="Home" />
        </div>
        <div className={box({ display: 'flex', flexWrap: 'wrap', gap: '$4' })}>
          <NavButton href="/about" text="About" />
          <NavButton href="/bookmarks" text="Bookmarks" />
          <NavButton href="/blog" text="Blog" />
        </div>
      </div>
    </div>
  );
}
