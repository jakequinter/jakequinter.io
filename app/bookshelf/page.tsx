import { getOKUContent } from 'lib/rss';
import Books from './Books';

export const revalidate = 60;

export default async function Bookshelf() {
  const { currentlyReading, toRead, read } = await getOKUContent();

  return (
    <>
      <div className="space-y-2">
        <h1 className="mb-6 text-2xl font-bold text-gray-900 dark:text-gray-50">
          Bookshelf
        </h1>
        <p>
          This is my internet library where I keep track of my favorite books.
          Books that I&apos;m currently reading, have already finished, or plan
          to pick up in the future
        </p>
        <p>
          This list is nowhere near exhaustive, and is only currently displaying
          books I&apos;ve found or read since 2021, but it is a good place to
          start.
        </p>
      </div>

      <Books currentlyReading={currentlyReading} toRead={toRead} read={read} />
    </>
  );
}
