'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'phosphor-react';
import { motion } from 'framer-motion';

import { Book } from '@/types/rss';
import BookshelfTabs from './BookshelfTabs';
import Pagination from './Pagination';

type Props = {
  toRead: Book[];
  currentlyReading: Book[];
  read: Book[];
};

export default function BookContent({ currentlyReading, toRead, read }: Props) {
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
    <>
      <BookshelfTabs
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
        setPage={setPage}
      />

      <ul className="space-y-4">
        {determineResults(paginationData()).map(book => (
          <li key={book.guid}>
            <Link href={book.link} passHref>
              <motion.div
                className="flex items-center justify-between rounded-lg bg-white p-4 shadow-md hover:cursor-pointer"
                whileHover={{ scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 100 }}
              >
                <div className="flex flex-col justify-between truncate pr-8">
                  <p className="truncate font-medium text-gray-900">
                    {book.title}
                  </p>

                  <p className="pt-4 text-sm font-light text-gray-500">
                    {book.creator}
                  </p>
                </div>

                <div>
                  <ArrowRight className="text-gray-500" />
                </div>
              </motion.div>
            </Link>
          </li>
        ))}
      </ul>

      <Pagination data={paginationData()} page={page} setPage={setPage} />
    </>
  );
}
