import React from 'react';
import { ArrowSquareOut } from 'phosphor-react';
import { GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';
import Link from 'next/link';

import { Book } from '@/types/rss';
import { getReadngContent } from '@/lib/rss';
import Container from '@/components/Container';

type Props = {
  toRead: Book[];
  currentlyReading: Book[];
  read: Book[];
};

export default function Bookshelf({ toRead, currentlyReading, read }: Props) {
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
      <h1 className="text-zinc-900 dark:text-zinc-50 text-5xl mb-8 font-semibold">
        Bookshelf
      </h1>
      <p className="pb-4">
        This is my internet library where I keep track of my favorite books.
        Books that I'm currently reading, have already finished, or plan to pick
        up in the future.
      </p>
      <p>
        This list is nowhere near exhaustive, and is only currently displaying
        books I've found or read since 2021, but it is a good place to start.
      </p>

      <div>
        <h2 className="text-xl text-center font-medium text-[#9E99AA] mt-16 mb-4">
          Currently reading 📖
        </h2>
        <div className="scroll h-[400px] p-8 bg-gradient-to-r from-[#D3CCE3] to-[#E9E4F0] dark:bg-gradient-to-r dark:from-[#9E99AA] dark:to-[#57555A] rounded overflow-y-scroll">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col justify-between bg-white dark:bg-black rounded p-4 shadow-lg h-40">
              <div className="flex gap-8 justify-between">
                <p>The Swift Programming Language (Swift 5.7 Edition)</p>
                <Link href="https://docs.swift.org/swift-book/" passHref>
                  <a target="_blank">
                    <ArrowSquareOut className="hover:text-zinc-900 dark:hover:text-zinc-400" />
                  </a>
                </Link>
              </div>
              <p className="text-zinc-400 dark:text-zinc-700 pt-4">Apple</p>
            </div>
            {currentlyReading.map(book => (
              <div
                key={book.guid}
                className="flex flex-col justify-between bg-white dark:bg-black rounded p-4 shadow-lg h-40"
              >
                <div className="flex gap-8 justify-between">
                  <p>{book.title}</p>
                  <Link href={`${book.link}`} passHref>
                    <a target="_blank">
                      <ArrowSquareOut className="hover:text-zinc-900 dark:hover:text-zinc-400" />
                    </a>
                  </Link>
                </div>
                <p className="text-zinc-400 dark:text-zinc-700 pt-4">
                  {book.creator}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl text-center font-medium text-[#8F6E94] mt-20 mb-4">
          Up next 📓
        </h2>
        <div className="scroll h-[400px] p-8 bg-gradient-to-r from-[#be93c5] to-[#7bc6cc] dark:bg-gradient-to-r dark:from-[#8F6E94] dark:to-[#2E4A4D] rounded overflow-y-scroll">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {toRead.map(book => (
              <div
                key={book.guid}
                className="flex flex-col justify-between bg-white dark:bg-black rounded p-4 shadow-lg h-40"
              >
                <div className="flex gap-8 justify-between">
                  <p>{book.title}</p>
                  <Link href={`${book.link}`} passHref>
                    <a target="_blank">
                      <ArrowSquareOut className="hover:text-zinc-900 dark:hover:text-zinc-400" />
                    </a>
                  </Link>
                </div>
                <p className="text-zinc-400 dark:text-zinc-700 pt-4">
                  {book.creator}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl text-center font-medium text-[#7E838E] mt-20 mb-4">
          Finished reading 📚
        </h2>
        <div className="scroll h-[400px] p-8 bg-gradient-to-r from-[#e0eafc] to-[#cfdef3] dark:bg-gradient-to-l dark:from-[#7E838E] dark:to-[#4E535B] rounded overflow-y-scroll">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {read.map(book => (
              <div
                key={book.guid}
                className="flex flex-col justify-between bg-white dark:bg-black rounded p-4 shadow-lg h-40"
              >
                <div className="flex gap-8 justify-between">
                  <p>{book.title}</p>
                  <Link href={`${book.link}`} passHref>
                    <a target="_blank">
                      <ArrowSquareOut className="hover:text-zinc-900 dark:hover:text-zinc-400" />
                    </a>
                  </Link>
                </div>
                <p className="text-zinc-400 dark:text-zinc-700 pt-4">
                  {book.creator}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
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
