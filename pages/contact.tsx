import Link from 'next/link';
import { NextSeo } from 'next-seo';

import Header from '@/components/Header';
import { text } from '@/styles/text';
import { box } from '@/styles/box';
import { link } from '@/styles/link';

const Contact = () => (
  <div>
    <NextSeo
      title="Jake Quinter 📱"
      canonical="https://jakequinter.io/contact"
      openGraph={{
        url: 'https://jakequinter.io/contact',
        title: 'Jake Quinter 📱',
      }}
    />
    <Header />
    <div
      className={box({
        marginTop: '$6',
        maxWidth: '42rem',
        mx: 'auto',
        px: '$3',
        '@bp3': { px: 0 },
      })}
    >
      <p className={text({ css: { color: '$primary' } })}>Get in touch.</p>
      <div
        className={box({
          borderLeft: '3px solid $secondary',
          marginTop: '$4',
          py: '2px',
          px: '$3',
        })}
      >
        <p className={text({ css: { marginLeft: '$3' } })}>
          <Link href="mailto:hello@jakequinter.io?subject=Hello" passHref>
            <a
              className={link({
                type: 'unactive',
                css: {
                  border: 'none',
                },
              })}
            >
              hello@jakequinter.io
            </a>
          </Link>
        </p>
      </div>
    </div>
  </div>
);

export default Contact;
