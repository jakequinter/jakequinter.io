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
    <div className="mt-20 max-w-screen-sm mx-auto px-0 md:px-4">
      <p className="text-gray-900 dark:text-darkgray-900">Get in touch.</p>
      <div className="border-l-2 border-gray-900 dark:border-darkgray-900 mt-8">
        <p className="ml-4">
          <Link href="mailto:hello@jakequinter.io?subject=Hello" passHref>
            <a className="hover:text-gray-900 dark:hover:text-darkgray-900">
              hello@jakequinter.io
            </a>
          </Link>
        </p>
      </div>
    </div>
  </div>
);

export default Contact;
