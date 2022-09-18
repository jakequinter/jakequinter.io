import React from 'react';

export function P({ ...props }) {
  return <p className="pb-4" {...props} />;
}

export function Code({ ...props }) {
  return (
    <code
      className="rounded bg-zinc-200 p-0.5 text-xs font-bold text-zinc-900 dark:bg-zinc-700 dark:text-zinc-200"
      {...props}
    />
  );
}
