import Link from 'next/link';
import { NextSeo } from 'next-seo';

import Nav from '@/components/layout/Nav';

const Contact = () => (
  <div>
    <NextSeo
      title="Jake Quinter 📱"
      canonical="https://jakequinter.io/contact"
      openGraph={{
        url: 'https://jakequinter.io/contact',
        title: 'Jake Quinter 📱',
      }}
    />
    <Nav />
    <div className="mt-20 max-w-screen-sm mx-auto px-4 md:px-0">
      <p className="text-zinc-900 dark:text-zinc-50">Get in touch.</p>
      <div className="border-l-2 border-zinc-900 dark:border-zinc-300 mt-8">
        <p className="ml-4">
          <Link href="mailto:hello@jakequinter.io?subject=Hello" passHref>
            <a className="hover:text-zinc-900 dark:hover:text-zinc-300">
              hello@jakequinter.io
            </a>
          </Link>
        </p>
      </div>
    </div>
  </div>
);

export default Contact;
