import React from 'react';
import Link from 'next/link';

type Thing = {
  id: string;
  link: string;
  title: string;
  type: string;
  description: string;
  tabButtonText: string;
};

export default function Thing({
  id,
  link,
  title,
  type,
  description,
  tabButtonText,
}: Thing) {
  return (
    <div key={id} className="py-3">
      <div>
        <Link href={link} passHref>
          <a
            className="text-zinc-800 dark:text-zinc-300 hover:underline underline-offset-2"
            target="_blank"
          >
            {title}
          </a>
        </Link>
        {tabButtonText === 'All' ? (
          <span className="ml-2 items-center px-1.5 py-0.5 rounded-full bg-zinc-200 dark:bg-zinc-800 text-xs">
            {type}
          </span>
        ) : null}
      </div>
      <p>{description}</p>
    </div>
  );
}
