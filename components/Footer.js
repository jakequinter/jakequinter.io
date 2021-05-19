import Link from 'next/link';

import { box } from '@/styles/box';
import { grid } from '@/styles/grid';
import { text } from '@/styles/text';
import { link } from '@/styles/link';

const FooterIcon = ({ href, icon }) => (
  <Link href={href}>
    <a className="text-gray-400" target="_blank">
      {icon}
    </a>
  </Link>
);

const Footer = () => (
  <footer
    className={box({
      // display: 'flex',
      maxWidth: '42rem',
      borderTop: '1px solid $border',
      // justifyContent: 'center',
      width: '100%',
      mx: 'auto',
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
      <div
        className={box({ display: 'flex', flexDirection: 'column' })}
        // className="flex flex-col space-y-4"
      >
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

export default Footer;
