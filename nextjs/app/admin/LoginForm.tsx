'use client';

import Link from 'next/link';
import { GoogleLogo, Warning } from 'phosphor-react';
import { signIn } from 'next-auth/react';

export default function LoginForm() {
  return (
    <>
      <div className="rounded-md bg-yellow-100 p-4">
        <div className="flex">
          <div className="flex-shrink-0">
            <Warning className="h-5 w-5 text-yellow-600" aria-hidden="true" />
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-yellow-800">
              Attention needed
            </h3>
            <div className="mt-2 text-sm text-yellow-700">
              <p>
                This page is intended for the developer and owner of this site
                only.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 flex justify-between">
        <button
          className="flex w-60 items-center justify-center rounded border border-zinc-300 bg-zinc-100 py-2 hover:border-zinc-400 dark:border-zinc-700 dark:bg-zinc-800 dark:hover:border-zinc-600"
          onClick={() => signIn()}
        >
          <GoogleLogo className="mr-4" /> Sign In with Google
        </button>
        <Link
          href="/"
          className="flex w-60 items-center justify-center rounded border border-zinc-300 bg-zinc-100 py-2 hover:border-zinc-400 dark:border-zinc-700 dark:bg-zinc-800 dark:hover:border-zinc-600"
        >
          Go home
        </Link>
      </div>
    </>
  );
}
