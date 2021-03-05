import React from 'react';
import useSWR from 'swr';

import Year2021 from './2021';
import Year2020 from './2020';
import Year2019 from './2019';
import Spinner from '@/components/Spinner';

import fetcher from '@/utils/fetcher';

const Timeline = () => {
  return (
    <div className="flow-root mt-16">
      <h3 className="text-2xl text-gray-900 font-bold pb-8">Timeline</h3>
      <Year2021 />
      <Year2020 />
      <Year2019 />
    </div>
  );
};

export default Timeline;
