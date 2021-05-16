import { box } from '@/styles/box';
import { text } from '@/styles/text';
import { IconType } from 'react-icons';

type TimelineEntry = {
  title: string;
  desription: string;
  date: string;
  logo: IconType;
  isLast: boolean;
};

const TimelineEntry = ({ title, description, date, logo, isLast = false }) => {
  return (
    <li>
      <div
        className={box({
          position: 'relative',
          paddingBottom: '$5'
        })}
      >
        {!isLast ? (
          <span
            className={box({
              position: 'absolute',
              top: '21px', // 1/2 of span height/width
              left: '21px', // 1/2 of span height/width
              height: '100%',
              width: '1px',
              backgroundColor: '$gray500'
            })}
            // className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
            aria-hidden="true"
          ></span>
        ) : null}
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
              {logo}
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
                {title}
              </p>
              <em
                className={text({
                  size: '2',
                  css: { color: '$gray600' }
                })}
              >
                {date}
              </em>
            </div>
            <p
              className={text({
                size: '2',
                css: { color: '$gray700', paddingTop: '$2' }
              })}
            >
              {description}
            </p>
          </div>
        </div>
      </div>
    </li>
  );
};

export default TimelineEntry;