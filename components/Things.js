import React, { useState, useEffect } from 'react';
import useSWR from 'swr';
import { MdPersonalVideo } from 'react-icons/md';
import { BsBook, BsCardChecklist, BsPeople } from 'react-icons/bs';

import BookmarkPanel from '@/components/BookmarkPanel';
import fetcher from '@/utils/fetcher';

const Things = () => {
  const { data: allThings } = useSWR('/api/things', fetcher);
  const { data: personalThings } = useSWR('/api/things/personal', fetcher);
  const { data: peopleThings } = useSWR('/api/things/people', fetcher);
  const { data: podcastThings } = useSWR('/api/things/podcast', fetcher);
  const [tabData, setTabData] = useState(null);

  useEffect(() => {
    setTabData(allThings);
  }, [allThings]);

  const TabButton = ({ text, data }) => (
    <button
      onClick={() => setTabData(data)}
      className={
        tabData === data
          ? 'border-blue-500 text-blue-500 focus:outline-none whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm'
          : ' text-gray-500 hover:text-gray-700 focus:outline-none border-none whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm'
      }
    >
      {text}
    </button>
  );

  return (
    <div>
      <div>
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-3 xs:space-x-8" aria-label="Tabs">
            <TabButton text={'All'} data={allThings} />
            <TabButton text={'Personal Sites'} data={personalThings} />
            <TabButton text={'People'} data={peopleThings} />
            <TabButton text={'Books & Podcasts'} data={podcastThings} />
          </nav>
        </div>
      </div>
      <BookmarkPanel data={tabData} />
    </div>
  );
};

export default Things;
