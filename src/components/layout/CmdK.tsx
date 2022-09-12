import { Fragment, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Combobox, Dialog, Transition } from '@headlessui/react';
import {
  ArrowRight,
  EnvelopeOpen,
  GithubLogo,
  TwitterLogo,
} from 'phosphor-react';

const items = [
  {
    id: 1,
    name: 'Home',
    category: 'Navigation',
    href: '/',
    icon: <ArrowRight className="mr-2" size="16" />,
  },
  {
    id: 2,
    name: 'About',
    category: 'Navigation',
    href: '/about',
    icon: <ArrowRight className="mr-2" size="16" />,
  },
  {
    id: 3,
    name: 'Bookshelf',
    category: 'Navigation',
    href: '/bookshelf',
    icon: <ArrowRight className="mr-2" size="16" />,
  },
  {
    id: 4,
    name: 'Food',
    category: 'Navigation',
    href: '/food',
    icon: <ArrowRight className="mr-2" size="16" />,
  },
  {
    id: 5,
    name: 'Blog',
    category: 'Navigation',
    href: '/blog',
    icon: <ArrowRight className="mr-2" size="16" />,
  },
  {
    id: 6,
    name: 'Github',
    category: 'Socials',
    href: 'https://github.com/jakequinter',
    icon: <GithubLogo className="mr-2" size="16" />,
  },
  {
    id: 7,
    name: 'Twitter',
    category: 'Socials',
    href: 'https://twitter.com/jakequinter',
    icon: <TwitterLogo className="mr-2" size="16" />,
  },
  {
    id: 7,
    name: 'Email',
    category: 'Socials',
    href: 'mailto:hello@jakequinter.io',
    icon: <EnvelopeOpen className="mr-2" size="16" />,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

export default function CmdK({ open, setOpen }: Props) {
  const router = useRouter();
  const [query, setQuery] = useState('');

  const filteredItems =
    query === ''
      ? items
      : items.filter(item => {
          return item.name.toLowerCase().includes(query.toLowerCase());
        });

  const groups = filteredItems.reduce((groups, item) => {
    return {
      ...groups,
      [item.category]: [...(groups[item.category] || []), item],
    };
  }, {});

  useEffect(() => {
    const down = e => {
      if (e.key === 'k' && e.metaKey) {
        setOpen(open => !open);
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
          <div className="fixed inset-0 bg-gray-900 bg-opacity-50 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto p-4 sm:p-6 md:p-40">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="mx-auto max-w-xl transform overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all divide-y divide-gray-300">
              <Combobox onChange={item => router.push(item.href)}>
                <div className="relative">
                  <Combobox.Input
                    className="h-12 w-full border-0 bg-transparent pl-4 text-gray-800 placeholder-gray-400 focus:ring-0 sm:text-sm"
                    placeholder="Search..."
                    onChange={event => setQuery(event.target.value)}
                  />
                </div>

                {filteredItems.length > 0 && (
                  <Combobox.Options
                    static
                    className="max-h-60 scroll-pt-11 scroll-pb-2 space-y-2 overflow-y-auto pb-1 pt-2"
                  >
                    {Object.entries(groups).map(([category, items]) => (
                      <li key={category} className="mx-1">
                        <h2 className="px-4 text-xs italic font-light">
                          {category}
                        </h2>
                        <ul className="mt-1 text-sm">
                          {items.map(item => (
                            <Combobox.Option
                              key={item.id}
                              value={item}
                              className={({ active }) =>
                                classNames(
                                  'cursor-default select-none px-4 py-2 rounded-md flex items-center',
                                  active &&
                                    'bg-gray-200 bg-opacity-75 text-gray-900'
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
