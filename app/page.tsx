import Image from 'next/image';
import Link from 'next/link';

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
          <Link href="https://www.merryfield.com">Merryfield</Link>.
        </p>

        <p>
          Building towards a future where the worlds of engineering and design
          unify to craft magical software experiences.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-900">
          Recent Endeavors
        </h2>

        <div className="mt-4 flex gap-2">
          <Image
            src="/images/merryfield.svg"
            alt="Merryfield logo"
            width={64}
            height={64}
          />
          <Image
            src="/images/funds.svg"
            alt="My initials as a logo"
            width={64}
            height={64}
          />
        </div>
      </section>
    </div>
  );
}
