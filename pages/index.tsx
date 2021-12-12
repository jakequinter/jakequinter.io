import React from 'react';
import Link from 'next/link';

import Nav from '@/components/layout/Nav';

export default function Home() {
  return (
    <>
      <Nav />
      <div className="mt-20 max-w-4xl mx-auto">
        <div className="max-w-xl px-4 lg:px-0">
          <h1 className="text-gray-900 dark:text-darkgray-900 text-6xl font-semibold mb-8">
            Jake Quinter
          </h1>
          <p className="mb-4">
            Software engineer interested in many things. Mainly software,
            technology, and optimizing habits for a more productive and
            self-fulfilling life.
          </p>
          <p>
            Currently saving lives with{' '}
            <Link href="https://www.deltadefense.com/" passHref>
              <a
                className="text-blue-500 hover:text-blue-600 dark:text-darkgray-700 dark:hover:text-darkgray-800 underline underline-offset-2"
                target="_blank"
              >
                Delta Defense
              </a>
            </Link>{' '}
            and the{' '}
            <Link href="https://www.usconcealedcarry.com/" passHref>
              <a
                className="text-blue-500 hover:text-blue-600 dark:text-darkgray-700 dark:hover:text-darkgray-800 underline underline-offset-2"
                target="_blank"
              >
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
