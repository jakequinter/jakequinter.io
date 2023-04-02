import Link from 'next/link';

import RecentEndeavors from './RecentEndeavors';

export default function Home() {
  return (
    <div className="mx-auto max-w-screen-sm space-y-16">
      <div className="flex flex-col items-center space-y-2">
        <h1 className="text-4xl font-bold text-gray-900">Jake Quinter</h1>
        <h2 className="text-xl font-medium">Software Engineer</h2>
      </div>

      <section className="space-y-4">
        <p>
          Hi, I&apos;m Jake. I&apos;m a software engineer based in Boston, MA
          where I&apos;m currently helping ease decision-making fatigue when
          choosing better-for-you products at{' '}
          <Link
            className="text-gray-500 hover:underline"
            href="https://www.merryfield.com"
          >
            Merryfield
          </Link>
          .
        </p>

        <p>
          Building towards a future where the worlds of engineering and design
          unify to craft magical software experiences.
        </p>
      </section>

      <RecentEndeavors />
    </div>
  );
}
