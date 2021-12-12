import React, { ReactNode } from 'react';
import { Toaster } from 'react-hot-toast';

import Nav from '@/components/layout/Nav';
import Footer from './Footer';

type Props = {
  children: ReactNode;
};

const Container = ({ children }: Props) => (
  <>
    <Toaster position="bottom-right" />
    <Nav />
    <main className="max-w-screen-sm mx-auto px-4 md:px-0 mt-20">
      <div className="mb-20" style={{ minHeight: 'calc(100vh - 422px)' }}>
        {children}
      </div>
      <Footer />
    </main>
  </>
);

export default Container;
