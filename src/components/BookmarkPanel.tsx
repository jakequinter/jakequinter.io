import React from 'react';

import { Thing as ThingType } from '@/types/thing';
import Thing from '@/components/Thing';

type Props = {
  data: ThingType[];
  tabButtonText: string;
};

const BookmarkPanel = ({ data, tabButtonText }: Props) => {
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
            tabButtonText={tabButtonText}
          />
        ))}
    </div>
  );
};

export default BookmarkPanel;
