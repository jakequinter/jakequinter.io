import { useState, useEffect } from 'react';

import { Thing } from '@/types/thing';
import BookmarkPanel from '@/components/BookmarkPanel';

type TabButtonProps = {
  text: string;
  data: Thing[];
  tabData: Thing[];
  setTabData: (data: Thing[]) => void;
  setTabText: (text: string) => void;
};

const TabButton = ({
  text,
  data,
  tabData,
  setTabData,
  setTabText,
}: TabButtonProps) => (
  <button
    onClick={() => {
      setTabData(data);
      setTabText(text);
    }}
    className={`${
      tabData === data
        ? 'border-b border-gray-900 dark:border-darkgray-900 text-gray-900 dark:text-darkgray-900'
        : 'hover:text-gray-900 hover:dark:text-darkgray-900'
    } text-sm whitespace-nowrap mr-4 pb-0.5`}
  >
    {text}
  </button>
);

type Props = {
  allThings: Thing[];
  personalSites: Thing[];
  people: Thing[];
  booksAndPodcasts: Thing[];
};

const Things = ({
  allThings,
  personalSites,
  people,
  booksAndPodcasts,
}: Props) => {
  const [tabData, setTabData] = useState<Thing[]>([]);
  const [tabText, setTabText] = useState('All');

  useEffect(() => {
    setTabData(allThings);
  }, [allThings]);

  return (
    <>
      <nav
        className="scroll flex border-b border-gray-500 dark:border-darkgray-500 overflow-x-auto"
        aria-label="Tabs"
      >
        <TabButton
          text={'All'}
          data={allThings}
          tabData={tabData}
          setTabData={setTabData}
          setTabText={setTabText}
        />
        <TabButton
          text={'Personal Sites'}
          data={personalSites}
          tabData={tabData}
          setTabData={setTabData}
          setTabText={setTabText}
        />
        <TabButton
          text={'People'}
          data={people}
          tabData={tabData}
          setTabData={setTabData}
          setTabText={setTabText}
        />
        <TabButton
          text={'Books & Podcasts'}
          data={booksAndPodcasts}
          tabData={tabData}
          setTabData={setTabData}
          setTabText={setTabText}
        />
      </nav>
      <BookmarkPanel data={tabData} tabButtonText={tabText} />
    </>
  );
};

export default Things;
