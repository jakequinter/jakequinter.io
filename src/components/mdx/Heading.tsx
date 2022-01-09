import { text } from '@/styles/text';
import React from 'react';

export function H1({ ...props }) {
  return (
    <h1
      className="text-zinc-900 dark:text-zinc-50 text-5xl font-semibold"
      {...props}
    />
  );
}

export function H2({ ...props }) {
  return (
    <h2
      className="text-zinc-900 dark:text-zinc-300 text-3xl font-semibold mt-6 mb-4"
      {...props}
    />
  );
}

export function H3({ ...props }) {
  return (
    <h1
      className="text-zinc-900 dark:text-zinc-300 text-xl font-semibold mt-6 mb-4"
      {...props}
    />
  );
}
