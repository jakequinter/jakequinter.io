import Link from 'next/link';
import Image from 'next/image';
import { Disclosure } from '@headlessui/react';

import HamburgerMenu from './HamburgerMenu';
import NavButton from '../NavButton';
import ThemeChanger from '../ThemeChanger';

export default function Nav() {
  return (
    <Disclosure
      as="nav"
      className="sticky top-0 left-0 max-w-screen-lg mx-auto w-full bg-white z-10"
    >
      {({ open }) => (
        <>
          <div className="px-0 sm:px-4 py-2">
            <div className="flex items-center justify-between h-16">
              <Link href="/" passHref>
                <a className="cursor-pointer">
                  <Image src="/lightlogo.png" height={50} width={60} />
                </a>
              </Link>
              <div className="hidden sm:flex space-x-4">
                <NavButton href="/about" text="About" />
                <NavButton href="/bookmarks" text="Bookmarks" />
                <NavButton href="/blog" text="Blog" />
              </div>
              <div className="flex sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2">
                  <span className="sr-only">Open main menu</span>
                  <HamburgerMenu isOpen={open} />
                </Disclosure.Button>
              </div>
              <div className="hidden sm:block">
                <ThemeChanger />
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div
              className={`${
                open ? 'shadow-md' : ''
              } flex flex-col px-2 pt-2 pb-3 space-y-4`}
            >
              <NavButton href="/about" text="About" />
              <NavButton href="/bookmarks" text="Bookmarks" />
              <NavButton href="/blog" text="Bookshelf" />
              <NavButton href="/blog" text="Food" />
              <NavButton href="/blog" text="Blog" />
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
