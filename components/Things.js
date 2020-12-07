import React, { useState } from 'react';
import useSWR, { mutate } from 'swr';
import { Tabs, TabList, Tab, TabPanels, TabPanel, Link } from '@chakra-ui/core';

import fetcher from '@/utils/fetcher';
import Thing from '@/components/Thing';

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
          {allThings &&
            allThings.things.map(thing => (
              <Thing
                key={thing.id}
                id={thing.id}
                link={thing.link}
                title={thing.title}
                type={thing.type}
                description={thing.description}
              />
            ))}
        </TabPanel>
        <TabPanel>
          {personalThings &&
            personalThings.things.map(thing => (
              <Thing
                key={thing.id}
                id={thing.id}
                link={thing.link}
                title={thing.title}
                type={thing.type}
                description={thing.description}
              />
            ))}
        </TabPanel>
        <TabPanel>
          {peopleThings &&
            peopleThings.things.map(thing => (
              <Thing
                key={thing.id}
                id={thing.id}
                link={thing.link}
                title={thing.title}
                type={thing.type}
                description={thing.description}
              />
            ))}
        </TabPanel>
        <TabPanel>
          {podcastThings &&
            podcastThings.things.map(thing => (
              <Thing
                key={thing.id}
                id={thing.id}
                link={thing.link}
                title={thing.title}
                type={thing.type}
                description={thing.description}
              />
            ))}
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default Things;
