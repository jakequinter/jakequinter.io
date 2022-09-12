import { ReactNode, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Toaster } from 'react-hot-toast';

import CmdK from './layout/CmdK';
import Footer from './Footer';

type Props = {
  children: ReactNode;
};

const Container = ({ children }: Props) => {
  const [cmdKOpen, setCmdKOpen] = useState(false);

  return (
    <>
      <Toaster position="bottom-right" />
      <div className="max-w-screen-xl mx-auto flex justify-between mt-4 px-4 md:px-0">
        <Link href="/" passHref>
          <a>
            <Image
              className="cursor-pointer"
              src="/logo.svg"
              alt="JDQ logo"
              height="32"
              width="32"
            />
          </a>
        </Link>
        <button
          className="border border-gray-300 focus:border-none focus:ring-2 ring-blue-500 outline-none rounded-md px-2 py-1 text-xl"
          onClick={() => setCmdKOpen(!cmdKOpen)}
        >
          ⌘
        </button>
      </div>
      <CmdK open={cmdKOpen} setOpen={setCmdKOpen} />
      <main className="max-w-screen-xl mx-auto px-4 md:px-0 mt-20">
        <div className="mb-20" style={{ minHeight: 'calc(100vh - 443px)' }}>
          {children}
        </div>
        {/* <Footer /> */}
      </main>
    </>
  );
};

export default Container;
