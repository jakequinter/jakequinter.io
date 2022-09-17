import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Container from '@/components/layout/Container';
import ProjectsScroll from '@/components/ProjectsScroll';

export default function Home() {
  return (
    <Container maxWidth="max-w-none">
      <div className="space-y-4 mb-8 max-w-screen-sm mx-auto">
        <h1 className="text-gray-900 dark:text-gray-50 text-2xl font-bold mb-6">
          Jake Quinter
        </h1>
        <p>
          Building towards a future where the worlds of engineering and design
          unify to craft magical software experiences. Obsessively (no,
          seriously) solving unique problems with code and pixels.
        </p>
        <p>
          Currently helping ease decision-making fatigue when choosing
          better-for-you products at{' '}
          <Link href="https://www.merryfield.com/" passHref>
            <a className="text-gray-900 dark:text-gray-50 hover:underline underline-offset-2">
              Merryfield
            </a>
          </Link>
          , and tinkering with indie projects to help people and building
          meaningful and delightful software to solve my own problems.
        </p>
        <p>
          When I find myself needing to step away from the computer, I enjoy
          reading, health and fitness, spending time with friends and family,
          the outdoors, and exploring my new home, Boston.
        </p>
      </div>

      <ProjectsScroll />
    </Container>
  );
}
