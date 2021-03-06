import React from 'react';
import Link from 'next/link';

import Header from '../components/Header';
import { box } from '../styles/box';
import { text } from '../styles/text';
import { link } from '../styles/link';

export default function Home() {
  return (
    <>
      <Header />
      <div
        className={box({
          maxWidth: '56rem',
          mx: 'auto',
          px: '$3',
          '@bp3': { px: 0 },
        })}
      >
        <div className={box({ maxWidth: '42rem' })}>
          <h1
            className={text({
              size: '8',
              weight: 'bold',
              css: { marginBottom: '$4', marginTop: '$6', color: '$primary' },
            })}
          >
            Jake Quinter
          </h1>
          <p className={text({ css: { marginBottom: '$3' } })}>
            Software developer and wannabe designer interested in many things.
            Mainly software, technology, and optimizing habits for a more
            productive and self-fulfilling life.
          </p>
          <p className={text()}>
            Currently saving lives with{' '}
            <Link href="https://www.deltadefense.com/" passHref>
              <a className={link()} target="_blank">
                Delta Defense
              </a>
            </Link>{' '}
            and the{' '}
            <Link href="https://www.usconcealedcarry.com/" passHref>
              <a className={link()} target="_blank">
                USCCA
              </a>
            </Link>
            .
          </p>
        </div>
      </div>
    </>
  );
}
