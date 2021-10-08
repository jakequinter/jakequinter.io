import React, { ReactNode } from 'react';
import { Toaster } from 'react-hot-toast';

import Header from './Header';
import Footer from './Footer';
import { box } from '../styles/box';

type Props = {
  children: ReactNode;
};

const Container = ({ children }: Props) => (
  <>
    <Header />
    <Toaster position="bottom-right" />
    <div
      className={box({
        my: 80,
        maxWidth: '42rem',
        mx: 'auto',
        minHeight: 'calc(100vh - 422px)',
        px: '$3',
        '@bp3': { px: 0 },
      })}
    >
      {children}
    </div>
    <Footer />
  </>
);

export default Container;
