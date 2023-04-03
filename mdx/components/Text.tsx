import React from 'react';

export function P({ ...props }) {
  return <p className="pb-4" {...props} />;
}

export function Code({ ...props }) {
  return (
    <code
      className="rounded bg-gray-200 p-0.5 text-xs font-semibold text-zinc-900"
      {...props}
    />
  );
}
