import { useEffect } from 'react';
import splitbee from '@splitbee/web';

export const useAnalytics = () => {
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      splitbee.init();
    }
  }, []);
};
