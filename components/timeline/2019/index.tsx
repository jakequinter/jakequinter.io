import { HiOutlineLightningBolt, HiOutlineAcademicCap } from 'react-icons/hi';

import TimelineEntry from '../TimelineEntry';
import { text } from '@/styles/text';
import { box } from '@/styles/box';

const Timeline2019 = () => {
  return (
    <>
      <h1
        className={text({
          size: '5',
          weight: 'medium',
          css: { color: '$primary', marginBottom: '$1' },
        })}
      >
        2019
      </h1>
      <hr className={text({ css: { borderColor: '$shade' } })} />
      <div>
        <ul className={box({ listStyle: 'none', padding: 0 })}>
          <TimelineEntry
            title="Graduated from Fox Valley Technical College"
            description="I'm glad I chose FVTC to start my journey in tech. I learned a lot from both hands on experience and the theory behind software."
            date="Dec 19"
            logo={<HiOutlineAcademicCap size={20} />}
          />
          <TimelineEntry
            title="Landed an internship at IGEN"
            description="I am very excited for my first role in IT. I will be working around 25 hours/wk on top of my studies."
            date="Apr 1"
            logo={<HiOutlineLightningBolt size={20} />}
            isLast={true}
          />
        </ul>
      </div>
    </>
  );
};

export default Timeline2019;
