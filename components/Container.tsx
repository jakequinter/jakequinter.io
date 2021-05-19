import { Toaster } from 'react-hot-toast';

import Header from './Header';
import Footer from './Footer';
import { box } from '../styles/box';

const Container = ({ children }) => (
  <>
    <Header />
    <Toaster position="bottom-right" />
    <div
      className={box({
        my: 80,
        maxWidth: '42rem',
        mx: 'auto',
        minHeight: 'calc(100vh - 422px)',
      })}
    >
      {children}
    </div>
    <Footer />
  </>
);

export default Container;
