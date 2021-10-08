import { useState, useEffect } from 'react';

import { Thing } from '@/types/thing';
import BookmarkPanel from '@/components/BookmarkPanel';

import { box } from '@/styles/box';
import { button } from '@/styles/button';

type TabButtonProps = {
  text: string;
  data: Thing[];
  tabData: Thing[];
  setTabData: (data: Thing[]) => void;
};

const TabButton = ({ text, data, tabData, setTabData }: TabButtonProps) => (
  <button
    onClick={() => setTabData(data)}
    className={
      tabData === data
        ? button({ type: 'activetab' })
        : button({ type: 'inactivetab' })
    }
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

  useEffect(() => {
    setTabData(allThings);
  }, [allThings]);

  return (
    <>
      <div>
        <div
          className={box({
            borderBottom: '1px solid $border',
          })}
        >
          <nav aria-label="Tabs">
            <TabButton
              text={'All'}
              data={allThings}
              tabData={tabData}
              setTabData={setTabData}
            />
            <TabButton
              text={'Personal Sites'}
              data={personalSites}
              tabData={tabData}
              setTabData={setTabData}
            />
            <TabButton
              text={'People'}
              data={people}
              tabData={tabData}
              setTabData={setTabData}
            />
            <TabButton
              text={'Books & Podcasts'}
              data={booksAndPodcasts}
              tabData={tabData}
              setTabData={setTabData}
            />
          </nav>
        </div>
      </div>
      <BookmarkPanel data={tabData} />
    </>
  );
};

export default Things;
