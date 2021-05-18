import Link from 'next/link';
import {
  HiArrowNarrowRight,
  HiOutlineDesktopComputer,
  HiOutlineLightningBolt,
  HiOutlineAcademicCap,
} from 'react-icons/hi';

import TimelineEntry from '../TimelineEntry';
import { text } from '@/styles/text';
import { box } from '@/styles/box';
import { button } from '@/styles/button';

export default function Timeline2020() {
  return (
    <div className="mb-12">
      <h1
        className={text({
          size: '5',
          weight: 'medium',
          css: { color: '$primary', marginBottom: '$1' },
        })}
      >
        2020
      </h1>
      <hr className={text({ css: { borderColor: '$shade' } })} />
      <div>
        <ul className={box({ listStyle: 'none', padding: 0 })}>
          <li>
            <div
              className={box({
                position: 'relative',
                paddingBottom: '$5',
              })}
            >
              <span
                className={box({
                  position: 'absolute',
                  top: '21px', // 1/2 of span height/width
                  left: '21px', // 1/2 of span height/width
                  height: '100%',
                  width: '1px',
                  backgroundColor: '$tertiary',
                })}
                aria-hidden="true"
              ></span>
              <div className={box({ position: 'relative', display: 'flex' })}>
                <div>
                  <span
                    className={box({
                      height: '42px', // double of span top/left
                      width: '42px', // double of span top/left
                      borderRadius: '50px',
                      backgroundColor: '$tertiary',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginRight: '$4',
                      color: '$gray500',
                      // padding: '$3'
                    })}
                  >
                    <HiOutlineDesktopComputer size={20} />
                  </span>
                </div>
                <div
                  className={box({
                    width: '100%',
                  })}
                >
                  <div
                    className={box({
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    })}
                  >
                    <p
                      className={text({
                        weight: 'medium',
                        css: { color: '$primary' },
                      })}
                    >
                      Added bookmarks page to jakequinter.io
                    </p>
                    <em
                      className={text({
                        size: '2',
                        css: { color: '$shade' },
                      })}
                    >
                      Dec 7
                    </em>
                  </div>
                  <p
                    className={text({
                      size: '2',
                      css: { paddingTop: '$2' },
                    })}
                  >
                    I have seen various "bookmarks" pages around the web and
                    thought I would try implementing one of my own. I created
                    this page for myself to keep track of different things I
                    come across on the internet that I find valuable.
                  </p>
                  <Link href="/bookmarks" passHref>
                    <button
                      type="button"
                      // className="inline-flex items-center px-4 py-2 mt-6 border border-gray-200 text-base font-medium rounded-md shadow-sm text-gray-900 bg-white hover:border-gray-300"
                      className={button({
                        css: {
                          display: 'flex',
                          alignItems: 'center',
                          marginTop: '$3',
                        },
                      })}
                    >
                      Bookmarks page
                      <HiArrowNarrowRight
                        className={text({
                          css: { marginLeft: '$3', color: 'inherit' },
                        })}
                        size={20}
                      />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </li>
          <TimelineEntry
            title="Completed the Computer Science curriculum at Lakeland"
            description="It took me awhile to finally decide on pursuing a bachelor's degree in CS, but ultimately glad I chose this route.  Just a few more classes for my Business Administration minor and I'm out."
            date="Nov 19"
            logo={<HiOutlineAcademicCap size={20} />}
          />
          <TimelineEntry
            title="Built jakequinter.io"
            description="I finally got around to building my personal site. I'm excited to see where it goes."
            date="Sep 12"
            logo={<HiOutlineDesktopComputer size={20} />}
          />
          <TimelineEntry
            title="Accepted a position at Thrivent"
            description="I accepted a contract position with Thrivent. I will be based out of their Appleton, WI headquarters, but will be working remotely until COVID-19 slows down."
            date="Mar 23"
            logo={<HiOutlineLightningBolt size={20} />}
          />
          <TimelineEntry
            title="Started my bachelor's degree at Lakeland University"
            description="I was torn if additional schooling was something I wanted to pursue. I ultimately decided it was a worthwhile investment and officially started my journey towards a Computer Science degree."
            date="Jan 20"
            logo={<HiOutlineAcademicCap size={20} />}
          />
          <TimelineEntry
            title="Started as a full time developer at IGEN"
            description="IGEN offered me a full time position as a Forms Developer. I will be working with a small team to help develop software to help clients with their taxes."
            date="Jan 7"
            logo={<HiOutlineLightningBolt size={20} />}
            isLast={true}
          />
        </ul>
      </div>
    </div>
  );
}
