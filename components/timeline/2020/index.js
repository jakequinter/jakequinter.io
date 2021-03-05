import Link from 'next/link';
import { FiArrowRight, FiMonitor, FiZap } from 'react-icons/fi';
import { IoSchoolOutline } from 'react-icons/io5';
import TimelineEntry from '../TimelineEntry';

const Timeline2020 = () => {
  return (
    <div className="mb-12">
      <h3 className="text-xl text-gray-900 font-medium ">2020</h3>
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
                      Added bookmarks page to jakequinter.io
                    </p>
                    <p className="text-sm pt-4">
                      I have seen various "bookmarks" pages around the web and
                      thought I would try implementing one of my own. I created
                      this page for myself to keep track of different things I
                      come across on the internet that I find valuable.
                    </p>
                    <Link href="/bookmarks" passHref>
                      <button
                        type="button"
                        className="inline-flex items-center px-4 py-2 mt-6 border border-gray-200 text-base font-medium rounded-md shadow-sm text-gray-900 bg-white hover:border-gray-300"
                      >
                        Go to bookmarks page{' '}
                        <span className="ml-2">
                          <FiArrowRight />
                        </span>
                      </button>
                    </Link>
                  </div>
                  <div className="text-right text-sm whitespace-nowrap text-gray-500">
                    <em>Dec 7</em>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <TimelineEntry
            title="Completed the Computer Science curriculum at Lakeland"
            description="It took me awhile to finally decide on pursuing a bachelor's degree in CS, but ultimately glad I chose this route.  Just a few more classes for my Business Administration minor and I'm out."
            date="Nov 19"
            logo={<IoSchoolOutline size={18} />}
          />
          <TimelineEntry
            title="Built jakequinter.io"
            description="I finally got around to building my personal site. I'm excited to see where it goes."
            date="Sep 12"
            logo={<FiMonitor size={18} />}
          />
          <TimelineEntry
            title="Accepted a position at Thrivent"
            description="I accepted a contract position with Thrivent. I will be based out of their Appleton, WI headquarters, but will be working remotely until COVID-19 slows down."
            date="Mar 23"
            logo={<FiZap size={18} />}
          />
          <TimelineEntry
            title="Started my bachelor's degree at Lakeland University"
            description="I was torn if additional schooling was something I wanted to pursue. I ultimately decided it was a worthwhile investment and officially started my journey towards a Computer Science degree."
            date="Jan 20"
            logo={<IoSchoolOutline size={18} />}
          />
          <TimelineEntry
            title="Started as a full time developer at IGEN"
            description="IGEN offered me a full time position as a Forms Developer. I will be working with a small team to help develop software to help clients with their taxes."
            date="Jan 7"
            logo={<FiZap size={18} />}
            isLast="true"
          />
        </ul>
      </div>
    </div>
  );
};

export default Timeline2020;
