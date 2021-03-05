import Link from 'next/link';
import { FiArrowRight, FiMonitor, FiHome, FiZap } from 'react-icons/fi';
import TimelineEntry from '../TimelineEntry';

const Timeline2021 = () => {
  return (
    <div className="mb-12">
      <h3 className="text-xl text-gray-900 font-medium ">2021</h3>
      <hr className="mt-1 mb-6" />
      <div className="ml-2">
        <ul className="-mb-8">
          <li>
            <div className="relative pb-12">
              {/* {data.years.length === i + 1 ? null : ( */}
              <span
                className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                aria-hidden="true"
              ></span>
              {/* )} */}
              <div className="relative flex space-x-8">
                <div>
                  <span className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center ring-8 ring-gray-100">
                    {/* {determineLogo(item.type)} */}
                    <FiMonitor className="text-gray-600" size={18} />
                  </span>
                </div>
                <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                  <div>
                    <p className="font-medium text-gray-900">
                      Added food page to jakequinter.io and did a little
                      redesign
                    </p>
                    <p className="text-sm pt-4">
                      Since making Boston our new home, my girlfriend and I have
                      been trying the new food (probably a little too much), so
                      I added a page to keep track of what we like. I also made
                      some design adjustments to the layout, which included an
                      updated footer and mobile navigation.
                    </p>
                    <Link href="/food" passHref>
                      <button
                        type="button"
                        className="inline-flex items-center px-4 py-2 mt-6 border border-gray-200 text-base font-medium rounded-md shadow-sm text-gray-900 bg-white hover:border-gray-300"
                      >
                        Go to food page{' '}
                        <span className="ml-2">
                          <FiArrowRight />
                        </span>
                      </button>
                    </Link>
                  </div>
                  <div className="text-right text-sm whitespace-nowrap text-gray-500">
                    <em>Feb 7</em>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <TimelineEntry
            title="Moved to Boston, MA"
            description="Moving to Boston has been a want for as long as I can remember. I'm very excited to finally be living here."
            date="Jan 23"
            logo={<FiHome size={18} />}
          />
          <TimelineEntry
            title="Accepted a new position with Thrivent"
            description="I took on a new role within Thrivent, and am excited to see what the future holds. "
            date="Jan 11"
            logo={<FiZap size={18} />}
          />
          <TimelineEntry
            title="Migrated to Tailwind CSS and added Timeline to jakequinter.io"
            description="From changes in my personal life, career, and development projects, I will be posting here to see an overview of my life. More entries to come."
            date="Jan 3"
            logo={<FiMonitor size={18} />}
            isLast="true"
          />
        </ul>
      </div>
    </div>
  );
};

export default Timeline2021;
