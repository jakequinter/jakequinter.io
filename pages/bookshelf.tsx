import { useState } from 'react';
import { CaretRight } from 'phosphor-react';
import { GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';
import { motion } from 'framer-motion';
import Link from 'next/link';

import { Book } from '@/types/rss';
import { getReadngContent } from '@/lib/rss';
import BookshelfTabs from '@/components/BookshelfTabs';
import Container from '@/components/Container';
import Pagination from '@/components/Pagination';

type Props = {
  toRead: Book[];
  currentlyReading: Book[];
  read: Book[];
};

export default function Bookshelf({ toRead, currentlyReading, read }: Props) {
  const [selectedTab, setSelectedTab] = useState('Reading');
  const [page, setPage] = useState(1);

  const paginationData = () => {
    if (selectedTab === 'Reading') {
      return currentlyReading;
    }

    if (selectedTab === 'To read') {
      return toRead;
    }

    return read;
  };

  const determineResults = (data: Book[]) => {
    if (page === 1) {
      return data.slice(0, 10);
    }

    return data.slice((page - 1) * 10, page * 10);
  };

  return (
    <Container>
      <NextSeo
        title="Jake Quinter 📚"
        canonical="https://jakequinter.io/bookshelf"
        openGraph={{
          url: 'https://jakequinter.io/bookshelf',
          title: 'Jake Quinter 📚',
        }}
      />

      <div className="space-y-2">
        <h1 className="text-gray-900 dark:text-gray-50 text-2xl font-semibold mb-6">
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

      <BookshelfTabs
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
        setPage={setPage}
      />

      {selectedTab === 'Reading' ? (
        <div className="space-y-4">
          <Link href="https://docs.swift.org/swift-book/" passHref>
            <motion.div
              className="flex justify-between items-center bg-white dark:bg-black rounded-lg p-4 hover:cursor-pointer shadow-md"
              whileHover={{ scale: 1.01 }}
            >
              <div className="flex flex-col justify-between truncate pr-8">
                <p className="truncate pr-8 text-gray-900 dark:text-gray-50">
                  The Swift Programming Language (Swift 5.7 Edition)
                </p>

                <p className="text-gray-500 text-sm font-light dark:text-gray-800 pt-4">
                  Apple
                </p>
              </div>
              <a target="_blank">
                <CaretRight className="text-gray-500 dark:text-gray-800" />
              </a>
            </motion.div>
          </Link>

          {determineResults(currentlyReading).map(book => (
            <Link key={book.guid} href={book.link} passHref>
              <motion.div
                className="flex justify-between items-center bg-white dark:bg-black rounded-lg p-4 hover:cursor-pointer shadow-md"
                whileHover={{ scale: 1.01 }}
              >
                <div className="flex flex-col justify-between truncate pr-8">
                  <p className="truncate pr-8 text-gray-900 dark:text-gray-50">
                    {book.title}
                  </p>

                  <p className="text-gray-500 text-sm font-light dark:text-gray-800 pt-4">
                    {book.creator}
                  </p>
                </div>
                <a target="_blank">
                  <CaretRight className="text-gray-500 dark:text-gray-800" />
                </a>
              </motion.div>
            </Link>
          ))}
        </div>
      ) : null}

      {selectedTab === 'To read' ? (
        <div className="space-y-4">
          {determineResults(toRead).map(book => (
            <Link key={book.guid} href={book.link} passHref>
              <motion.div
                className="flex justify-between items-center bg-white dark:bg-black rounded-lg p-4 hover:cursor-pointer shadow-md"
                whileHover={{ scale: 1.01 }}
              >
                <div className="flex flex-col justify-between truncate pr-8">
                  <p className="truncate pr-8 text-gray-900 dark:text-gray-50">
                    {book.title}
                  </p>

                  <p className="text-gray-500 text-sm font-light dark:text-gray-800 pt-4">
                    {book.creator}
                  </p>
                </div>
                <a target="_blank">
                  <CaretRight className="text-gray-500 dark:text-gray-800" />
                </a>
              </motion.div>
            </Link>
          ))}
        </div>
      ) : null}

      {selectedTab === 'Finished' ? (
        <div className="space-y-4">
          {determineResults(read).map(book => (
            <Link key={book.guid} href={book.link} passHref>
              <motion.div
                className="flex justify-between items-center bg-white dark:bg-black rounded-lg p-4 hover:cursor-pointer shadow-md"
                whileHover={{ scale: 1.01 }}
              >
                <div className="flex flex-col justify-between truncate pr-8">
                  <p className="truncate pr-8 text-gray-900 dark:text-gray-50">
                    {book.title}
                  </p>

                  <p className="text-gray-500 text-sm font-light dark:text-gray-800 pt-4">
                    {book.creator}
                  </p>
                </div>
                <a target="_blank">
                  <CaretRight className="text-gray-500 dark:text-gray-800" />
                </a>
              </motion.div>
            </Link>
          ))}
        </div>
      ) : null}

      <Pagination data={paginationData()} page={page} setPage={setPage} />
    </Container>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const rss = await getReadngContent();

  return {
    props: {
      toRead: rss.toRead,
      currentlyReading: rss.currentlyReading,
      read: rss.read,
    },
    revalidate: 60,
  };
};
