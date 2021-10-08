import React from 'react';

import { Thing as ThingType } from '@/types/thing';
import Thing from '@/components/Thing';

type Props = {
  data: ThingType[];
};

const BookmarkPanel = ({ data }: Props) => {
  return (
    <div>
      {data &&
        data.map(thing => (
          <Thing
            key={thing.id}
            id={thing.id as string}
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
