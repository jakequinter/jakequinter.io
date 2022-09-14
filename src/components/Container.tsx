import { ReactNode, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Toaster } from 'react-hot-toast';

import CmdK from './layout/CmdK';
import Footer from './Footer';
import { useTheme } from 'next-themes';

type Props = {
  children: ReactNode;
};

const Container = ({ children }: Props) => {
  const [cmdKOpen, setCmdKOpen] = useState(false);

  return (
    <>
      <Toaster position="bottom-right" />
      <div className="max-w-screen-sm mx-auto flex justify-between mt-4 px-4 md:px-0">
        <Link href="/" passHref>
          <a>
            <Logo />
          </a>
        </Link>
        <button
          className="border border-gray-300 dark:border-gray-800 dark:border-opacity-40 focus:ring-2 ring-offset-2 ring-blue-300 outline-none rounded-md px-2 py-1 text-xl"
          onClick={() => setCmdKOpen(!cmdKOpen)}
        >
          ⌘
        </button>
      </div>
      <CmdK open={cmdKOpen} setOpen={setCmdKOpen} />
      <main className="max-w-screen-sm mx-auto px-4 md:px-0 mt-20">
        <div className="mb-20" style={{ minHeight: 'calc(100vh - 264px)' }}>
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Container;

function Logo() {
  const { resolvedTheme } = useTheme();
  let src;

  switch (resolvedTheme) {
    case 'dark':
      src = '/jdq-light.svg';
      break;
    default:
      src = '/jdq-dark.svg';
      break;
  }

  return <Image src={src} width={32} height={32} />;
}
