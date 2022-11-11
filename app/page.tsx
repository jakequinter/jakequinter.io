import Link from 'next/link';

import ProjectsScroll from './ProjectsScroll';

export default function Home() {
  return (
    <>
      <div className="mx-auto mb-8 max-w-screen-sm space-y-4 ">
        <h1 className="mb-8 text-2xl font-bold text-gray-900 dark:text-gray-50">
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
          <Link
            href="https://www.merryfield.com/"
            className="text-gray-900 underline-offset-2 hover:underline dark:text-gray-50"
          >
            Merryfield
          </Link>
          , and tinkering with indie projects to help people and building
          meaningful and delightful software to solve my own problems.
        </p>
        <p>
          When I find myself needing to step away from the computer, I enjoy
          reading, health and fitness, spending time with friends and family,
          the outdoors, and exploring my new home in Boston.
        </p>
      </div>

      <ProjectsScroll />
    </>
  );
}
