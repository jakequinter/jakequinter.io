import { useState, useEffect } from 'react';

import BookmarkPanel from '@/components/BookmarkPanel';
import { box } from '@/styles/box';
import { button } from '@/styles/button';

const Things = ({ allThings, personalSites, people, booksAndPodcasts }) => {
  const [tabData, setTabData] = useState(null);

  useEffect(() => {
    setTabData(allThings);
  }, [allThings]);

  const TabButton = ({ text, data }) => (
    <button
      onClick={() => setTabData(data)}
      className={
        tabData === data
          ? button({ type: 'activetab' })
          : button({ type: 'inactivetab' })
      }
      // className={
      //   tabData === data
      //     ? 'border-blue-500 text-blue-500 focus:outline-none whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm'
      //     : ' text-gray-500 hover:text-gray-700 focus:outline-none border-none whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm'
      // }
    >
      {text}
    </button>
  );

  return (
    <>
      <div>
        <div
          className={box({
            borderBottom: '1px solid $border',
          })}
        >
          <nav aria-label="Tabs">
            <TabButton text={'All'} data={allThings} />
            <TabButton text={'Personal Sites'} data={personalSites} />
            <TabButton text={'People'} data={people} />
            <TabButton text={'Books & Podcasts'} data={booksAndPodcasts} />
          </nav>
        </div>
      </div>
      <BookmarkPanel data={tabData} />
    </>
  );
};

export default Things;
