import { useState } from 'react';

import Year2021 from './2021';
import Year2020 from './2020';
import Year2019 from './2019';
import { text } from '@/styles/text';
import { button } from '@/styles/button';
import { box } from '@/styles/box';

const Timeline = () => {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="flow-root mt-16">
      <h1
        className={text({
          size: '6',
          weight: 'medium',
          css: { marginTop: '$5', marginBottom: '$3' },
        })}
      >
        Timeline
      </h1>
      <Year2021 />
      {showMore && (
        <>
          <Year2020 />
          <Year2019 />
        </>
      )}
      <div className={box({ display: 'flex', justifyContent: 'center' })}>
        <button onClick={() => setShowMore(!showMore)} className={button()}>
          {!showMore ? `Show more` : `I'm done`}
        </button>
      </div>
    </div>
  );
};

export default Timeline;
