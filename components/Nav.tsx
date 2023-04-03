'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Nav() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0, transition: { duration: 0.5 } }}
      className="fixed top-4 left-2 right-2 z-10 mx-auto max-w-sm rounded-2xl bg-gray-800 p-1.5 text-sm"
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
        <li>
          <Link
            className="rounded-[10px] bg-white py-2.5 px-4 font-medium text-black hover:bg-gray-100"
            href="mailto:hello@jakequinter.io"
          >
            Contact
          </Link>
        </li>
      </ul>
    </motion.nav>
  );
}
