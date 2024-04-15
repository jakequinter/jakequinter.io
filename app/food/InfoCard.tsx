'use client';

import Link from 'next/link';

import { Info } from 'phosphor-react';

export default function InfoCard() {
  return (
    <div className="rounded-lg bg-white p-4 shadow-md">
      <div className="flex">
        <div className="flex-shrink-0">
          <Info weight="bold" className="mt-1 text-blue-500" aria-hidden="true" />
        </div>
        <div className="ml-3 flex-1 md:flex md:justify-between">
          <p className="text-sm">
            Yes, you should be seeing food images here. Since PlanetScale{' '}
            <Link
              href="https://planetscale.com/docs/concepts/hobby-plan-deprecation-faq"
              className="text-blue-500 hover:text-blue-600"
            >
              deprecated it&apos;s hobby tier
            </Link>
            , I have to find an alternative. I&apos;m busy doing other things I find more fun at the
            moment so this is just to prevent my application from breaking :).
          </p>
        </div>
      </div>
    </div>
  );
}
