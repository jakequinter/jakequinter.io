import React from 'react';
import { Box } from '@chakra-ui/core';

import Spinner from '@/components/Spinner';
import Thing from '@/components/Thing';

const BookmarkPanel = ({ data }) => {
  console.log(data);
  return (
    <div>
      {!data && <Spinner />}
      {data &&
        data.things.map(thing => (
          <Thing
            key={thing.id}
            id={thing.id}
            link={thing.link}
            title={thing.title}
            type={thing.type}
            description={thing.description}
          />
        ))}
    </div>
  );
};

export default BookmarkPanel;
