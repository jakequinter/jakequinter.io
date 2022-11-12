'use client';

import Link from 'next/link';
import { CaretRight } from 'phosphor-react';
import { motion } from 'framer-motion';

import { Book } from 'types/rss';

type Props = {
  books: Book[];
};

export default function BookGroup({ books }: Props) {
  return (
    <div className="w-full space-y-4">
      {books.map(book => (
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
  );
}
