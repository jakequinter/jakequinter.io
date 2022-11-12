'use client';

import { useState } from 'react';

import { Book } from 'types/rss';
import BookGroup from './BookGroup';
import Pagination from 'app/shared/Pagination';
import Tabs from './Tab';

export default function Books({ currentlyReading, toRead, read }: any) {
  const [selectedTab, setSelectedTab] = useState('Reading');
  const [page, setPage] = useState(1);

  const handleBooks = () => {
    if (selectedTab === 'Reading') {
      return currentlyReading;
    } else if (selectedTab === 'To Read') {
      return toRead;
    } else {
      return read;
    }
  };
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

      <BookGroup books={determineResults(handleBooks())} />

      <Pagination data={paginationData()} page={page} setPage={setPage} />
    </>
  );
}
