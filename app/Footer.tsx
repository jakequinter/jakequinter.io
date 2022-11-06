import { useEffect, useState } from 'react';
import { formatInTimeZone } from 'date-fns-tz';

export default function Footer() {
  const [currentTime, setCurrentTime] = useState('');
  const [meridiem, setMeridiem] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const time = formatInTimeZone(now, 'America/New_York', 'hh:mm:ss a');

      setMeridiem(time.includes('AM') ? 'AM' : 'PM');
      setCurrentTime(formatInTimeZone(now, 'America/New_York', 'hh:mm:ss'));
    }, 1000);

    return () => clearInterval(interval);
  }, [currentTime]);

  return (
    <footer className="border-t border-gray-300 px-4 dark:border-gray-800 dark:border-opacity-40 md:px-0">
      <div className="mx-auto flex max-w-screen-sm items-center justify-between py-4 text-xs text-gray-600 dark:text-gray-800">
        <p>Better than yesterday.</p>
        <div className="flex items-center gap-0.5">
          <p className="boston-time">
            Boston {currentTime ? `· ${currentTime}` : '00:00:00'}
          </p>
          {meridiem ? <p>{meridiem}</p> : '--'}
        </div>
      </div>
    </footer>
  );
}
