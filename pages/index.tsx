import React from 'react';
import Link from 'next/link';

import Container from '@/components/Container';

export default function Home() {
  return (
    <Container>
      <div>
        <h1 className="text-gray-900 dark:text-gray-50 text-2xl font-semibold mb-6">
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
            <a className="text-gray-900 dark:text-gray-50 hover:underline underline-offset-2">
              Merryfield
            </a>
          </Link>
          .
        </p>
      </div>
    </Container>
  );
}
