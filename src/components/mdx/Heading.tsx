import { text } from '@/styles/text';
import React from 'react';

export function H1({ ...props }) {
  return (
    <h1
      className="text-2xl font-bold text-gray-900 dark:text-gray-50"
      {...props}
    />
  );
}

export function H2({ ...props }) {
  return (
    <h2
      className="mt-6 mb-6 text-lg font-semibold text-zinc-900 dark:text-zinc-300"
      {...props}
    />
  );
}

export function H3({ ...props }) {
  return (
    <h3
      className="mt-6 mb-4 font-semibold text-zinc-900 dark:text-zinc-300"
      {...props}
    />
  );
}
