import { FiZap } from 'react-icons/fi';
import { IoSchoolOutline } from 'react-icons/io5';
import TimelineEntry from '../TimelineEntry';

const Timeline2019 = () => {
  return (
    <div>
      <h3 className="text-xl text-gray-900 font-medium ">2019</h3>
      <hr className="mt-1 mb-6" />
      <div className="ml-2">
        <ul className="-mb-8">
          <TimelineEntry
            title="Graduated from Fox Valley Technical College"
            description="I'm glad I chose FVTC to start my journey in tech. I learned a lot from both hands on experience and the theory behind software."
            date="Dec 19"
            logo={<IoSchoolOutline size={18} />}
          />
          <TimelineEntry
            title="Landed an internship at IGEN"
            description="I am very excited for my first role in IT. I will be working around 25 hours/wk on top of my studies."
            date="Apr 1"
            logo={<FiZap size={18} />}
            isLast="true"
          />
        </ul>
      </div>
    </div>
  );
};

export default Timeline2019;
