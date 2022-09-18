import { ReactNode, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Toaster } from 'react-hot-toast';

import CmdK from './CmdK';
import Footer from './Footer';
import { useTheme } from 'next-themes';

type Props = {
  children: ReactNode;
  maxWidth?: string;
};

const Container = ({ children, maxWidth = 'max-w-screen-sm' }: Props) => {
  const [cmdKOpen, setCmdKOpen] = useState(false);

  return (
    <>
      <Toaster position="bottom-right" />
      <div className="navbar z-10">
        <div className="mx-auto flex max-w-screen-sm items-center justify-between px-4 py-6 md:px-0">
          <Link href="/" passHref>
            <a className="mt-2">
              <Logo />
            </a>
          </Link>
          <button
            className="rounded-md border border-gray-300 px-2 py-1 text-xl outline-none ring-blue-300 ring-offset-2 focus:ring-2 dark:border-gray-800 dark:border-opacity-40"
            onClick={() => setCmdKOpen(!cmdKOpen)}
          >
            ⌘
          </button>
        </div>
      </div>
      <CmdK open={cmdKOpen} setOpen={setCmdKOpen} />
      <main className={`${maxWidth} mx-auto mt-12 px-4 md:px-0`}>
        <div className="mb-20" style={{ minHeight: 'calc(100vh - 272px)' }}>
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
