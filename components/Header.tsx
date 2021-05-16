import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { FiMenu, FiX } from 'react-icons/fi';
import { HiOutlineSun, HiOutlineMoon } from 'react-icons/hi';

import { box } from '../styles/box';
import NavButton from '@/components/NavButton';
import useWindowSize from '@/utils/useWindowSize';
import ThemeChanger from '@/components/ThemeChanger';
import { button } from '@/styles/button';

export default function Header() {
  const router = useRouter();
  const { width } = useWindowSize();
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();

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
      {/* {!isOpen && width < 767 ? (
        <h5 className="text-gray-900 font-bold">{handlePageTitle()}</h5>
      ) : null}
      {width < 767 ? (
        <button
          className={button()}
          // className="inline-flex p-3 rounded md:hidden text-gray-900 ml-auto outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>
      ) : null} */}
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
          <Link href="/">
            {theme === 'dark' ? (
              <Image src="/darklogo.png" height={50} width={60} />
            ) : (
              <Image src="/lightlogo.png" height={50} width={60} />
            )}
          </Link>
        </div>
        <div
          className={box({
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: '$3',

            '@bp1': { gap: '$4' },
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
