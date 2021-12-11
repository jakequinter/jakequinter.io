import React from 'react';

type Props = {
  isOpen: boolean;
};

export default function HamburgerMenu({ isOpen }: Props) {
  return (
    <button className="flex flex-col h-10 w-10 rounded justify-center items-center focus:ring-0 outline-none">
      <div
        className={`${'h-0.5 w-6 my-1 rounded-full bg-black transition ease transform duration-300'} ${
          isOpen ? 'rotate-45 translate-y-1' : ''
        }`}
      />
      <div
        className={`${'h-0.5 w-6 my-1 rounded-full bg-black transition ease transform duration-300'} ${
          isOpen ? '-rotate-45 -translate-y-1.5' : ''
        }`}
      />
    </button>
  );
}
