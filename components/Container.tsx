import { Toaster } from 'react-hot-toast';

import Header from './Header';
// import Footer from './Footer';
import { box } from '../styles/box';

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
