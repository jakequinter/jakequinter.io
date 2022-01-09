import React from 'react';

export function P({ ...props }) {
  return <p className="pb-4" {...props} />;
}

export function Code({ ...props }) {
  return (
    <code
      className="bg-zinc-200 dark:bg-zinc-700 text-zinc-900 dark:text-zinc-200 text-xs rounded p-0.5 font-bold"
      {...props}
    />
  );
}
