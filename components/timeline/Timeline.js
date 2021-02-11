import React from 'react';
import useSWR from 'swr';

import Year2021 from './2021';
import Year2020 from './2020';
import Year2019 from './2019';
import Spinner from '@/components/Spinner';

import fetcher from '@/utils/fetcher';

const Timeline = () => {
  const { data: year2021 } = useSWR('/api/years/2021', fetcher);
  const { data: year2020 } = useSWR('/api/years/2020', fetcher);
  const { data: year2019 } = useSWR('/api/years/2019', fetcher);

  return (
    <div className="flow-root mt-16">
      <h3 className="text-2xl text-gray-900 font-bold pb-8">Timeline</h3>
      {!year2020 && <Spinner />}
      {year2020 && (
        <>
          <Year2021 data={year2021} />
          <Year2020 data={year2020} />
          <Year2019 data={year2019} />
        </>
      )}
    </div>
  );
};

export default Timeline;
