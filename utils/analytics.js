import { useRouter } from 'next/router';
import { useEffect } from 'react';
import splitbee from '@splitbee/web';

export const useAnalytics = () => {
  const router = useRouter();

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      splitbee.init();
    }
  }, []);
};
