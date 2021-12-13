import React from 'react';
import { GetStaticProps } from 'next';
import Link from 'next/link';

import { Book } from '@/types/rss';
import { getReadngContent } from '@/lib/rss';
import Container from '@/components/Container';

type Props = {
  rss: Book[];
};

export default function Bookshelf({ rss }: Props) {
  return (
    <Container>
      <h1 className="text-gray-900 dark:text-darkgray-900 text-5xl mb-8 font-semibold">
        Bookshelf
      </h1>
      <p className="pb-4">
        This is my internet library where I keep track of my favorite books.
        Books that I'm currently reading, have already finished, or plan to pick
        up in the future.
      </p>
      <p className="pb-4">
        This list is nowhere near exhaustive, and is only currently displaying
        books I've found or read this year, but it is a good place to start.
      </p>

      <div className="mt-8">
        <h2 className="text-xl text-center font-medium text-gray-900 dark:text-darkgray-900 pb-2">
          Currently reading 📚
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {rss.map(book => (
            <Link key={book.guid} href={`${book.link}`}>
              <a
                className="border bg-white dark:bg-black border-gray-400 hover:border-gray-600 dark:border-darkgray-400 hover:dark:border-darkgray-600 rounded p-4 shadow"
                target="_blank"
              >
                <div className="flex flex-col justify-between h-full rounded">
                  <p>{book.title}</p>
                  <p className="text-gray-600 dark:text-darkgray-600 pt-4">
                    {book.creator}
                  </p>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </Container>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const rss = await getReadngContent();

  return {
    props: { rss },
    revalidate: 60,
  };
};
