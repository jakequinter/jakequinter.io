import React from 'react';
import Link from 'next/link';

import Container from '@/components/Container';

export default function Home() {
  return (
    <Container>
      <div className="max-w-xl px-4 lg:px-0">
        <h1 className="text-gray-900 dark:text-gray-50 text-6xl font-semibold mb-8">
          Jake Quinter
        </h1>
        <p className="mb-4">
          Software engineer interested in many things. Mainly software,
          technology, and optimizing habits for a more productive and
          self-fulfilling life.
        </p>
        <p>
          Currently helping ease decision-making fatigue when choosing
          better-for-you products at{' '}
          <Link href="https://www.merryfield.com/" passHref>
            <a className="text-blue-500 dark:text-orange-500 hover:underline underline-offset-2">
              Merryfield
            </a>
          </Link>
          .
        </p>
      </div>
    </Container>
  );
}
