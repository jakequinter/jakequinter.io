import React from 'react';

import Thing from '@/components/Thing';

const BookmarkPanel = ({ data }) => {
  return (
    <div>
      {data &&
        data.map(thing => (
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
