import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from 'next-themes';

import { box } from '../styles/box';
import NavButton from '@/components/NavButton';
import ThemeChanger from '@/components/ThemeChanger';

export default function Header() {
  const { theme } = useTheme();

  return (
    <nav
      className={box({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'fixed',
        px: '$3',
        top: 0,
        zIndex: 10,
        width: '100%',
        py: '$3',
        backgroundColor: '$nav',
        '@bp3': { px: 0 },
      })}
    >
      <div
        className={box({
          display: 'flex',
          width: '100%',
          justifyContent: 'space-between',
          maxWidth: '56rem',
        })}
      >
        <div className={box({ display: 'flex', alignItems: 'center' })}>
          <Link href="/" passHref>
            <a>
              {theme === 'dark' ? (
                <Image src="/darklogo.png" height={50} width={60} />
              ) : (
                <Image src="/lightlogo.png" height={50} width={60} />
              )}
            </a>
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
          <ThemeChanger />
        </div>
      </div>
    </nav>
  );
}
