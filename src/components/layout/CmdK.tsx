import { Fragment, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Combobox, Dialog, Transition } from '@headlessui/react';
import {
  ArrowRight,
  EnvelopeOpen,
  GithubLogo,
  MoonStars,
  SunHorizon,
  TwitterLogo,
} from 'phosphor-react';
import { useTheme } from 'next-themes';

import { CmdKItem } from '@/types/CmdKItem';
import classNames from '@/utils/classNames';

const items = [
  {
    id: 1,
    name: 'Home',
    category: 'Navigation',
    href: '/',
    icon: <ArrowRight className="mr-4" size="20" />,
  },
  {
    id: 2,
    name: 'Bookshelf',
    category: 'Navigation',
    href: '/bookshelf',
    icon: <ArrowRight className="mr-4" size="20" />,
  },
  {
    id: 3,
    name: 'Food',
    category: 'Navigation',
    href: '/food',
    icon: <ArrowRight className="mr-4" size="20" />,
  },
  {
    id: 4,
    name: 'Blog',
    category: 'Navigation',
    href: '/blog',
    icon: <ArrowRight className="mr-4" size="20" />,
  },
  {
    id: 5,
    name: 'Github',
    category: 'Socials',
    href: 'https://github.com/jakequinter',
    icon: <GithubLogo className="mr-4" size="20" />,
  },
  {
    id: 6,
    name: 'Twitter',
    category: 'Socials',
    href: 'https://twitter.com/jakequinter',
    icon: <TwitterLogo className="mr-4" size="20" />,
  },
  {
    id: 7,
    name: 'Email',
    category: 'Socials',
    href: 'mailto:hello@jakequinter.io',
    icon: <EnvelopeOpen className="mr-4" size="20" />,
  },
  {
    id: 8,
    name: 'Change theme to light',
    category: 'System',
    icon: <SunHorizon className="mr-4" size="20" />,
    action: (setTheme: () => void) => {
      setTheme();
    },
  },
  {
    id: 9,
    name: 'Change theme to dark',
    category: 'System',
    icon: <MoonStars className="mr-4" size="16" />,
    action: (setTheme: () => void) => {
      setTheme();
    },
  },
];

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

export default function CmdK({ open, setOpen }: Props) {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [mounted, setMounted] = useState(true);
  const { theme, setTheme } = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const handleTheme = () => {
    const targetTheme = theme === 'light' || theme === null ? 'dark' : 'light';

    setTheme(targetTheme);
  };

  const filteredItems =
    query === ''
      ? items
      : items.filter(item => {
          return item.name.toLowerCase().includes(query.toLowerCase());
        });

  const groups = filteredItems.reduce((groups, item) => {
    return {
      ...groups,
      // @ts-expect-error
      [item.category]: [...(groups[item.category] || []), item],
    };
  }, {});

  useEffect(() => {
    const down = (e: { key: string; metaKey: any }) => {
      if (e.key === 'k' && e.metaKey) {
        setOpen(!open);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  return (
    <Transition.Root
      show={open}
      as={Fragment}
      afterLeave={() => setQuery('')}
      appear
    >
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-50 bg-opacity-80 dark:bg-gray-900 dark:bg-opacity-80 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto p-4 sm:p-6 md:pt-60">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="mx-auto max-w-xl transform overflow-hidden rounded-xl bg-white dark:bg-black shadow-2xl ring-1 ring-black ring-opacity-5 transition-all divide-y divide-gray-300 dark:divide-gray-900">
              <Combobox
                onChange={(item: CmdKItem) => {
                  if (item?.href) {
                    router.push(item.href);
                  } else {
                    item.action(handleTheme);
                  }

                  setOpen(false);
                }}
              >
                <div className="relative">
                  <Combobox.Input
                    className="h-12 w-full border-0 bg-transparent pl-4 placeholder-gray-500 dark:placeholder-gray-800 dark:placeholder-opacity-50 focus:ring-0 sm:text-sm"
                    placeholder="Search..."
                    onChange={event => setQuery(event.target.value)}
                  />
                </div>

                {filteredItems.length > 0 && (
                  <Combobox.Options
                    static
                    className="max-h-60 scroll-pt-11 scroll-pb-2 space-y-2 overflow-y-auto pb-2 pt-2"
                    style={{ maxHeight: '345px' }}
                  >
                    {Object.entries(groups).map(([category, items]) => (
                      <li key={category} className="mx-2">
                        <h2 className="px-2 text-xs italic font-light py-1">
                          {category}
                        </h2>
                        <ul className="mt-1 text-sm">
                          {(theme === 'light' || theme === null) &&
                            // @ts-expect-error
                            items
                              .filter((i: CmdKItem) => i.id !== 8)
                              .map((item: CmdKItem) => (
                                <Combobox.Option
                                  key={item.id}
                                  value={item}
                                  className={({ active }) =>
                                    classNames(
                                      'cursor-default select-none px-4 py-3 rounded-lg flex items-center',
                                      active
                                        ? 'bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-50'
                                        : ''
                                    )
                                  }
                                >
                                  {item.icon}
                                  {item.name}
                                </Combobox.Option>
                              ))}
                          {theme === 'dark' &&
                            // @ts-expect-error
                            items
                              .filter((i: CmdKItem) => i.id !== 9)
                              .map((item: CmdKItem) => (
                                <Combobox.Option
                                  key={item.id}
                                  value={item}
                                  className={({ active }) =>
                                    classNames(
                                      'cursor-default select-none px-4 py-3 rounded-lg flex items-center',
                                      active
                                        ? 'bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-50'
                                        : ''
                                    )
                                  }
                                >
                                  {item.icon}
                                  {item.name}
                                </Combobox.Option>
                              ))}
                        </ul>
                      </li>
                    ))}
                  </Combobox.Options>
                )}

                {query !== '' && filteredItems.length === 0 && (
                  <div className="border-t border-gray-100 text-center text-sm py-3">
                    <p className="font-semibold text-gray-900">
                      No results found
                    </p>
                  </div>
                )}
              </Combobox>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
