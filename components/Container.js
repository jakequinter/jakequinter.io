import NextLink from 'next/link';
import Image from 'next/image';

import NavButton from '@/components/NavButton';
import Footer from './Footer';

const Container = ({ children }) => {
  return (
    <>
      <div style={{ backgroundColor: '#FCFDFE' }}>
        <div className="flex justify-between items-center p-4 xs:max-w-4xl mx-auto w-full">
          <NavButton href="/" text="Home" />
          <NavButton href="/about" text="About" />
          <NavButton href="/contact" text="Contact" />
          <NextLink href="/resume.pdf" passHref>
            <a
              className="text-sm xs:text-lg text-gray-900 font-medium"
              target="_blank"
            >
              Resume
            </a>
          </NextLink>
        </div>
      </div>
      <hr />
      <div className="flex-col justify-center px-4 my-16 max-w-4xl mx-auto">
        {children}
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default Container;
