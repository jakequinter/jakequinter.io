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
          <NavButton href="/bookmarks" text="Bookmarks" />
          <NavButton href="/contact" text="Contact" />
          <NextLink href="/resume.pdf" passHref>
            <a
              className="text-sm xs:text-base text-gray-900 hover:text-blue-500 font-medium"
              target="_blank"
            >
              Resume
            </a>
          </NextLink>
        </div>
      </div>
      <hr />
      <div
        className="flex-col justify-center px-4 mt-16 mb-16 max-w-4xl mx-auto"
        style={{ minHeight: 'calc(100vh - 210px)' }}
      >
        {children}
      </div>
      <Footer />
    </>
  );
};

export default Container;
