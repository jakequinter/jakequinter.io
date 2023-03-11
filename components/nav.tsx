'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Nav() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0, transition: { duration: 0.5 } }}
      className="fixed top-4 left-2 right-2 mx-auto max-w-sm rounded-2xl bg-stone-800 p-1.5 text-sm"
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
          <Link href="/">Bookshelf</Link>
        </li>
        <li className="text-gray-50 hover:text-gray-300">
          <Link href="/">Food</Link>
        </li>
        <li className="text-gray-50 hover:text-gray-300">
          <Link href="/">Blog</Link>
        </li>
        <li className="rounded-[10px] bg-white py-2 px-4 font-medium text-black">
          <Link href="mailto:hello@jakequinter.io">Contact</Link>
        </li>
      </ul>
    </motion.nav>
  );
}
