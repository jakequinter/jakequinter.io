'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Nav() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0, transition: { duration: 0.5 } }}
      className="fixed top-4 left-4 right-4 mx-auto max-w-md rounded-2xl bg-stone-800 p-1.5"
    >
      <ul className="flex items-center justify-between">
        <li>
          <Link href="/" className="text-white">
            <Image
              className="rounded-[10px]"
              src="/images/jake.png"
              alt="Jake"
              width={32}
              height={32}
            />
          </Link>
        </li>
        <li>
          <Link href="/" className="text-white">
            Bookshelf
          </Link>
        </li>
        <li>
          <Link href="/" className="text-white">
            Food
          </Link>
        </li>
        <li>
          <Link href="/" className="text-white">
            Blog
          </Link>
        </li>
        <li>
          <button
            className="rounded-[10px] bg-white py-2.5 px-4 font-medium text-black"
            // href="/"
          >
            Contact
          </button>
        </li>
      </ul>
    </motion.nav>
  );
}
