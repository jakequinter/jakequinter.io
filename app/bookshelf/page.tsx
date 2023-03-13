import Image from 'next/legacy/image';

import { getOkuContent } from '@/lib/rss';
import BookContent from './BookContent';

export default async function Bookshelf() {
  const { currentlyReading, read, toRead } = await getOkuContent();

  return (
    <div className="mx-auto mt-40 max-w-screen-sm">
      <div className="mb-16 flex flex-col items-center">
        <h1 className="text-4xl font-bold text-gray-900">Bookshelf</h1>
      </div>

      <p className="mb-16">
        This is my internet library where I keep track of my favorite books.
        Books that I&apos;m currently reading, have already finished, or plan to
        pick up in the future. This list is nowhere near exhaustive, and is
        currently displaying books I&apos;ve found or read since 2021.
      </p>

      <BookContent
        currentlyReading={currentlyReading}
        toRead={toRead}
        read={read}
      />
    </div>
  );
}
