import Link from 'next/link';
import Image from 'next/image';
import { Disclosure } from '@headlessui/react';

import HamburgerMenu from './HamburgerMenu';
import NavLink from '../NavLink';
import ThemeChanger from '../ThemeChanger';
import logo from '../../../public/logo.svg';

export default function Nav() {
  return (
    <Disclosure
      as="nav"
      className="sticky top-0 left-0 max-w-4xl mx-auto w-full bg-gray-100 dark:bg-darkgray-100 z-10"
    >
      {({ open }) => (
        <>
          <div className="px-4 sm:px-0 py-2">
            <div className="flex items-center justify-between h-16">
              <Link href="/" passHref>
                <a className="cursor-pointer">
                  <Image src={logo} />
                </a>
              </Link>
              <div className="hidden sm:flex space-x-4">
                <NavLink href="/about" text="About" />
                <NavLink href="/bookmarks" text="Bookmarks" />
                <NavLink href="/bookshelf" text="Bookshelf" />
                <NavLink href="/blog" text="Blog" />
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
              <NavLink href="/about" text="About" />
              <NavLink href="/bookmarks" text="Bookmarks" />
              <NavLink href="/blog" text="Bookshelf" />
              <NavLink href="/blog" text="Food" />
              <NavLink href="/blog" text="Blog" />
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
