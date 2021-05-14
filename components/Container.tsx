import { box } from '../styles/box';
import Header from './Header';
import Footer from './Footer';

const Container = ({ children }) => (
  <>
    <Header />
    <div className={box({ my: 80, maxWidth: '42rem', mx: 'auto' })}>
      {children}
    </div>
    {/* <Footer /> */}
  </>
);

export default Container;
