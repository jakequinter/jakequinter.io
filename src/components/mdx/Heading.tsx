import { text } from '@/styles/text';
import React from 'react';

export function H1({ ...props }) {
  return (
    <h1
      className="text-gray-900 dark:text-gray-50 text-2xl font-bold"
      {...props}
    />
  );
}

export function H2({ ...props }) {
  return (
    <h2
      className="text-zinc-900 dark:text-zinc-300 text-lg font-semibold mt-6 mb-6"
      {...props}
    />
  );
}

export function H3({ ...props }) {
  return (
    <h3
      className="text-zinc-900 dark:text-zinc-300 font-semibold mt-6 mb-4"
      {...props}
    />
  );
}
