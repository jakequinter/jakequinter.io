import { useState, useCallback, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';

import NavButton from '@/components/NavButton';
import Footer from './Footer';
import useWindowSize from '@/utils/useWindowSize';

const Container = ({ children }) => {
  const router = useRouter();
  const { width } = useWindowSize();
  const [isOpen, setIsOpen] = useState(false);

  const handlePageTitle = () => {
    if (router.pathname === '/') return 'Home';
    else
      return (
        router.pathname.slice(1).charAt(0).toUpperCase() +
        router.pathname.slice(2)
      );
  };

  return (
    <>
      <nav className="flex items-center flex-wrap bg-white bg-opacity-25 p-3 ">
        {!isOpen && width < 767 ? (
          <h5 className="text-gray-900 font-bold">{handlePageTitle()}</h5>
        ) : null}
        <button
          className="inline-flex p-3 rounded md:hidden text-gray-900 ml-auto outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>
        {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
        {/* <div
          className={`${
            isOpen ? '' : 'hidden'
          }   w-full md:inline-flex md:flex-grow md:w-auto`}
        > */}
        <div
          className={`${
            isOpen ? '' : 'hidden'
          } md:inline-flex md:flex-row w-full text-center flex flex-col md:h-auto justify-between max-w-4xl mx-auto`}
        >
          <NavButton href="/" text="Home" />
          <NavButton href="/about" text="About" />
          <NavButton href="/bookmarks" text="Bookmarks" />
          <NavButton href="/contact" text="Contact" />
          <Link href="/resume.pdf" passHref>
            <a
              className="md:inline-flex md:w-auto w-full px-3 py-2 rounded items-center justify-center text-gray-900 hover:text-blue-500 font-medium"
              target="_blank"
            >
              Resume
            </a>
          </Link>
          {/* </div> */}
        </div>
      </nav>
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
