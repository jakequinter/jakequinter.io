'use client';

import { useState } from 'react';
import Link from 'next/link';
import { CaretRight } from 'phosphor-react';
import { motion } from 'framer-motion';

import { Book } from 'types/rss';
import Pagination from './Pagination';
import Tabs from './Tab';

export default function Books({ currentlyReading, toRead, read }: any) {
  const [selectedTab, setSelectedTab] = useState('Reading');
  const [page, setPage] = useState(1);

  const determineResults = (data: Book[]) => {
    if (page === 1) {
      return data.slice(0, 10);
    }

    return data.slice((page - 1) * 10, page * 10);
  };

  const paginationData = () => {
    if (selectedTab === 'Reading') {
      return currentlyReading;
    }

    if (selectedTab === 'To read') {
      return toRead;
    }

    return read;
  };

  return (
    <>
      <Tabs
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
        setPage={setPage}
      />

      {selectedTab === 'Reading' ? (
        <div className="w-full space-y-4">
          {determineResults(currentlyReading).map(book => (
            <div key={book.guid}>
              <Link href={book.link} passHref>
                <motion.div
                  className="flex items-center justify-between rounded-lg bg-white p-4 shadow-md hover:cursor-pointer dark:bg-black"
                  whileHover={{ scale: 1.01 }}
                >
                  <div className="flex flex-col justify-between truncate pr-8">
                    <p className="truncate pr-8 text-gray-900 dark:text-gray-50">
                      {book.title}
                    </p>

                    <p className="pt-4 text-sm font-light text-gray-500 dark:text-gray-800">
                      {book.creator}
                    </p>
                  </div>
                  <a target="_blank">
                    <CaretRight className="text-gray-500 dark:text-gray-800" />
                  </a>
                </motion.div>
              </Link>
            </div>
          ))}
        </div>
      ) : null}

      {selectedTab === 'To read' ? (
        <div className="w-full space-y-4">
          {determineResults(toRead).map(book => (
            <div key={book.guid}>
              <Link href={book.link} passHref>
                <motion.div
                  className="flex items-center justify-between rounded-lg bg-white p-4 shadow-md hover:cursor-pointer dark:bg-black"
                  whileHover={{ scale: 1.01 }}
                >
                  <div className="flex flex-col justify-between truncate pr-8">
                    <p className="truncate pr-8 text-gray-900 dark:text-gray-50">
                      {book.title}
                    </p>

                    <p className="pt-4 text-sm font-light text-gray-500 dark:text-gray-800">
                      {book.creator}
                    </p>
                  </div>
                  <a target="_blank">
                    <CaretRight className="text-gray-500 dark:text-gray-800" />
                  </a>
                </motion.div>
              </Link>
            </div>
          ))}
        </div>
      ) : null}

      {selectedTab === 'Finished' ? (
        <div className="w-full space-y-4">
          {determineResults(read).map(book => (
            <div key={book.guid}>
              <Link href={book.link} passHref>
                <motion.div
                  className="flex items-center justify-between rounded-lg bg-white p-4 shadow-md hover:cursor-pointer dark:bg-black"
                  whileHover={{ scale: 1.01 }}
                >
                  <div className="flex flex-col justify-between truncate pr-8">
                    <p className="truncate pr-8 text-gray-900 dark:text-gray-50">
                      {book.title}
                    </p>

                    <p className="pt-4 text-sm font-light text-gray-500 dark:text-gray-800">
                      {book.creator}
                    </p>
                  </div>
                  <a target="_blank">
                    <CaretRight className="text-gray-500 dark:text-gray-800" />
                  </a>
                </motion.div>
              </Link>
            </div>
          ))}
        </div>
      ) : null}

      <Pagination data={paginationData()} page={page} setPage={setPage} />
    </>
  );
}
