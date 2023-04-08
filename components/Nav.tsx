'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

import ContactDropdown from './ContactDropdown';

export default function Nav() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0, transition: { duration: 0.5 } }}
      className="fixed top-4 left-2 right-2 z-10 mx-auto max-w-sm rounded-2xl bg-black/80 p-1.5 text-sm backdrop-blur-sm"
    >
      <ul className="flex items-center justify-between">
        <li>
          <Link href="/">
            <Image
              className="rounded-[10px]"
              src="/images/jake.png"
              alt="Jake"
              width={32}
              height={32}
            />
          </Link>
        </li>
        <li className="text-gray-50 hover:text-gray-300">
          <Link href="/bookshelf">Bookshelf</Link>
        </li>
        <li className="text-gray-50 hover:text-gray-300">
          <Link href="/food">Food</Link>
        </li>
        <li className="text-gray-50 hover:text-gray-300">
          <Link href="/blog">Blog</Link>
        </li>
        <ContactDropdown />
      </ul>
    </motion.nav>
  );
}
