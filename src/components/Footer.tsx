import Link from 'next/link';

import { box } from '@/styles/box';
import { grid } from '@/styles/grid';
import { link } from '@/styles/link';

export default function Footer() {
  return (
    <footer
      className={box({
        maxWidth: '42rem',
        borderTop: '1px solid $border',
        width: '100%',
        mx: 'auto',
        px: '$3',
        '@bp3': { px: 0 },
      })}
    >
      <div
        className={grid({
          rows: 'footer',
          css: {
            gap: '0',
            width: '100%',
            my: '$4',
          },
        })}
      >
        <div className={box({ display: 'flex', flexDirection: 'column' })}>
          <Link href="/">
            <a
              className={link({
                type: 'unactive',
                css: { paddingBottom: '24px' },
              })}
            >
              Home
            </a>
          </Link>
          <Link href="/about">
            <a
              className={link({
                type: 'unactive',
                css: { paddingBottom: '24px' },
              })}
            >
              About
            </a>
          </Link>
          <Link href="/bookmarks">
            <a
              className={link({
                type: 'unactive',
                css: { paddingBottom: '24px' },
              })}
            >
              Bookmarks
            </a>
          </Link>
          <Link href="/blog">
            <a
              className={link({
                type: 'unactive',
                css: {
                  paddingBottom: '24px',
                  '@bp1': { paddingBottom: 0 },
                },
              })}
            >
              Blog
            </a>
          </Link>
        </div>
        <div className={box({ display: 'flex', flexDirection: 'column' })}>
          <Link href="https://github.com/jakequinter">
            <a
              className={link({
                type: 'unactive',
                css: { paddingBottom: '24px' },
              })}
              target="_blank"
            >
              GitHub
            </a>
          </Link>
          <Link href="https://twitter.com/jakequinter">
            <a
              className={link({
                type: 'unactive',
                css: { paddingBottom: '24px' },
              })}
              target="_blank"
            >
              Twitter
            </a>
          </Link>
          <Link href="https://www.linkedin.com/in/jake-quinter-b9731915b/">
            <a
              className={link({
                type: 'unactive',
                css: {
                  paddingBottom: '24px',
                  '@bp1': { paddingBottom: 0 },
                },
              })}
              target="_blank"
            >
              LinkedIn
            </a>
          </Link>
        </div>
        <div className={box({ display: 'flex', flexDirection: 'column' })}>
          <Link href="/food">
            <a
              className={link({
                type: 'unactive',
                css: { paddingBottom: '24px' },
              })}
            >
              Food
            </a>
          </Link>
          <Link href="/contact">
            <a className={link({ type: 'unactive' })}>Contact</a>
          </Link>
        </div>
      </div>
    </footer>
  );
}
