'use client';

import Image from 'next/image';
import Link from 'next/link';
import { CaretRight } from 'phosphor-react';
import { motion } from 'framer-motion';

import { Book } from 'types/rss';

type Props = {
  books: Book[];
};

export default function BookGroup({ books }: Props) {
  console.log('books', books);
  return (
    <div className="w-full space-y-4">
      {books.map(book => (
        <div key={book.guid}>
          <Link href={book.link} passHref>
            <motion.div
              className="flex items-center  rounded-lg bg-white shadow-md hover:cursor-pointer dark:bg-black"
              whileHover={{ scale: 1.01 }}
            >
              <Image
                className="mr-4 rounded-l-lg"
                src={book.enclosure?.url ?? '/images/book-placeholder.jpg'}
                alt={`${book.title} cover`}
                height={60}
                width={60}
              />
              <div className="flex w-full flex-col justify-between truncate py-3 pr-8">
                <p className="truncate pr-8 text-gray-900 dark:text-gray-50">
                  {book.title}
                </p>

                <p className="pt-4 text-sm font-light text-gray-500 dark:text-gray-800">
                  {book.creator}
                </p>
              </div>

              <CaretRight className="mr-3 text-gray-500 dark:text-gray-800" />
            </motion.div>
          </Link>
        </div>
      ))}
    </div>
  );
}
