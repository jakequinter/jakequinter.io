import Link from 'next/link';
import {
  HiArrowNarrowRight,
  HiOutlineDesktopComputer,
  HiOutlineLightningBolt,
  HiOutlineHome
} from 'react-icons/hi';

import TimelineEntry from '../TimelineEntry';
import { text } from '@/styles/text';
import { box } from '@/styles/box';
import { button } from '@/styles/button';

const Timeline2021 = () => {
  return (
    <div className="mb-12">
      <h1
        className={text({
          size: '5',
          weight: 'medium',
          css: { color: '$gray300', marginBottom: '$1' }
        })}
      >
        2021
      </h1>
      <hr className={text({ css: { borderColor: '$gray500' } })} />
      <div>
        <ul className={box({ listStyle: 'none', padding: 0 })}>
          <li>
            <div
              className={box({
                position: 'relative',
                paddingBottom: '$5'
              })}
            >
              <span
                className={box({
                  position: 'absolute',
                  top: '21px', // 1/2 of span height/width
                  left: '21px', // 1/2 of span height/width
                  height: '100%',
                  width: '1px',
                  backgroundColor: '$gray500'
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
                      backgroundColor: '$gray500',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginRight: '$4',
                      color: '$gray400'
                      // padding: '$3'
                    })}
                  >
                    <HiOutlineDesktopComputer size={20} />
                  </span>
                </div>
                <div
                  className={box({
                    width: '100%'
                  })}
                >
                  <div
                    className={box({
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    })}
                  >
                    <p
                      className={text({
                        weight: 'medium'
                        // css: { marginBottom: '$1' }
                      })}
                    >
                      Added food page to jakequinter.io and did a little
                      redesign
                    </p>
                    <em
                      className={text({
                        size: '2',
                        css: { color: '$gray600' }
                      })}
                    ></em>
                  </div>
                  <p
                    className={text({
                      size: '2',
                      css: { color: '$gray700', paddingTop: '$2' }
                    })}
                  >
                    Since making Boston our new home, my girlfriend and I have
                    been trying the new food (probably a little too much), so I
                    added a page to keep track of what we like. I also made some
                    design adjustments to the layout, which included an updated
                    footer and mobile navigation.
                  </p>
                  <Link href="/food" passHref>
                    <button
                      type="button"
                      className={button({
                        css: {
                          display: 'flex',
                          alignItems: 'center',
                          marginTop: '$3'
                        }
                      })}
                    >
                      Food page
                      <HiArrowNarrowRight
                        className={text({
                          css: { marginLeft: '$3', color: 'inherit' }
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
            title="Moved to Boston, MA"
            description="Moving to Boston has been a want for as long as I can remember. I'm very excited to finally be living here."
            date="Jan 23"
            logo={<HiOutlineHome size={20} />}
          />
          <TimelineEntry
            title="Accepted a new position with Thrivent"
            description="I took on a new role within Thrivent, and am excited to see what the future holds. "
            date="Jan 11"
            logo={<HiOutlineLightningBolt size={20} />}
          />
          <TimelineEntry
            title="Migrated to Tailwind CSS and added Timeline to jakequinter.io"
            description="From changes in my personal life, career, and development projects, I will be posting here to see an overview of my life. More entries to come."
            date="Jan 3"
            logo={<HiOutlineDesktopComputer size={20} />}
            isLast={true}
          />
        </ul>
      </div>
    </div>
  );
};

export default Timeline2021;
