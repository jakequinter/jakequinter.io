import { Toaster } from 'react-hot-toast';

import { box } from '../styles/box';
import Header from './Header';
import Footer from './Footer';

const Container = ({ children }) => (
  <>
    <Header />
    <Toaster position="bottom-right" />
    <div className={box({ my: 80, maxWidth: '42rem', mx: 'auto' })}>
      {children}
    </div>
    {/* <Footer /> */}
  </>
);

export default Container;
