'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
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
    <footer className="border-gray-220 border-t px-4">
      <div className="flex items-center justify-between py-4 text-xs text-gray-500">
        <Link href="https://bitcoin.org/bitcoin.pdf" className="hover:text-gray-600">∞ / 21M</Link>
        <div className="flex items-center gap-0.5">
          <p className="w-[6.5375rem]">
            Boston {currentTime ? `· ${currentTime}` : '00:00:00'}
          </p>
          {meridiem ? <p>{meridiem}</p> : '--'}
        </div>
      </div>
    </footer>
  );
}
