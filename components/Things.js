import React from 'react';
import useSWR from 'swr';
import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/core';

import BookmarkPanel from '@/components/BookmarkPanel';
import fetcher from '@/utils/fetcher';

const Things = () => {
  const { data: allThings } = useSWR('/api/things', fetcher);
  const { data: personalThings } = useSWR('/api/things/personal', fetcher);
  const { data: peopleThings } = useSWR('/api/things/people', fetcher);
  const { data: podcastThings } = useSWR('/api/things/podcast', fetcher);

  return (
    <Tabs isFitted variant="enclosed" pt="8">
      <TabList mb="1em">
        <Tab color="#333333">All</Tab>
        <Tab color="#333333">Sites</Tab>
        <Tab color="#333333">People</Tab>
        <Tab color="#333333">Books & Podcasts</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <BookmarkPanel data={allThings} />
        </TabPanel>
        <TabPanel>
          <BookmarkPanel data={personalThings} />
        </TabPanel>
        <TabPanel>
          <BookmarkPanel data={peopleThings} />
        </TabPanel>
        <TabPanel>
          <BookmarkPanel data={podcastThings} />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default Things;
