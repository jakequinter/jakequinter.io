'use client';

import { useEffect, useState } from 'react';

import { CaretDown, Envelope, GithubLogo, TwitterLogo } from 'phosphor-react';
import { AnimatePresence, motion, useAnimationControls } from 'framer-motion';

import classNames from '@/utils/classNames';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import Link from 'next/link';

const variants = {
  open: {
    opacity: 1,
    transition: { ease: 'easeOut', duration: 0.1 },
  },
  closed: {
    opacity: 0,
    transition: { ease: 'easeIn', duration: 0.2 },
  },
};

export default function ContactDropdown() {
  const [open, setOpen] = useState(false);
  const controls = useAnimationControls();

  async function closeMenu() {
    await controls.start('closed');
    setOpen(false);
  }

  useEffect(() => {
    if (open) {
      controls.start('open');
    }
  }, [controls, open]);

  return (
    <DropdownMenu.Root open={open} onOpenChange={setOpen}>
      <DropdownMenu.Trigger asChild>
        <button className="inline-flex items-center gap-2 rounded-[10px] bg-white py-2.5 px-4 font-medium text-black hover:bg-gray-100">
          Contact
          <CaretDown
            className={classNames(
              open ? 'rotate-180' : '',
              'transition duration-150 ease-in-out'
            )}
          />
        </button>
      </DropdownMenu.Trigger>

      <AnimatePresence>
        {open ? (
          <DropdownMenu.Portal forceMount>
            <DropdownMenu.Content
              align="end"
              alignOffset={-6}
              className="mt-2 rounded-2xl bg-black/80 p-1.5 text-gray-200 shadow backdrop-blur-sm"
            >
              <motion.div
                initial="closed"
                animate={controls}
                exit="closed"
                variants={variants}
              >
                <DropdownMenu.Item className="rounded-[10px] outline-none focus:bg-gray-700 focus:text-white">
                  <Link
                    href="mailto:hello@jakequinter.io"
                    className="inline-flex items-center gap-4 px-4 py-2.5 text-sm"
                  >
                    <Envelope size={20} />
                    Email
                  </Link>
                </DropdownMenu.Item>

                <Link href="https://github.com/jakequinter">
                  <DropdownMenu.Item className="flex items-center gap-4 rounded-[10px] px-4 py-2.5 text-sm outline-none focus:bg-gray-700 focus:text-white">
                    <GithubLogo size={20} />
                    Github
                  </DropdownMenu.Item>
                </Link>

                <Link href="https://twitter.com/jakequinter">
                  <DropdownMenu.Item className="flex items-center gap-4 rounded-[10px] px-4 py-2.5 text-sm outline-none focus:bg-gray-700 focus:text-white">
                    <TwitterLogo size={20} />
                    Twitter
                  </DropdownMenu.Item>
                </Link>
              </motion.div>
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        ) : null}
      </AnimatePresence>
    </DropdownMenu.Root>
  );
}
