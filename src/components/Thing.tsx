import React from 'react';
import Link from 'next/link';
import { box } from '@/styles/box';
import { link as stylelink } from '@/styles/link';
import { text } from '@/styles/text';

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
            className="text-gray-900 dark:text-darkgray-900 hover:border-b hover:border-gray-900 dark:hover:border-darkgray-800"
            target="_blank"
          >
            {title}
          </a>
        </Link>
        {tabButtonText === 'All' ? (
          <span className="ml-2 items-center px-1.5 py-0.5 rounded-full bg-gray-400 dark:bg-darkgray-400 text-xs">
            {type}
          </span>
        ) : null}
      </div>
      <p>{description}</p>
    </div>
  );
}
