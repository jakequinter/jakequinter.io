import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';

import { box } from '../styles/box';
import NavButton from '@/components/NavButton';
import useWindowSize from '@/utils/useWindowSize';
import { link } from '@/styles/link';
import ThemeChanger from '@/components/ThemeChanger';

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
          mx: 'auto',
          paddingTop: '$3',
        })}
      >
        <div className={box({ display: 'flex', alignItems: 'center' })}>
          <NavButton href="/" text="Home" />
        </div>
        <div
          className={box({
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: '$4',
          })}
        >
          <NavButton href="/about" text="About" />
          <NavButton href="/bookmarks" text="Bookmarks" />
          <NavButton href="/blog" text="Blog" />
          <ThemeChanger />
        </div>
      </div>
    </div>
  );
}
