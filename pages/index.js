import React from 'react';
import NextLink from 'next/link';

import Container from '@/components/Container';
import Timeline from '@/components/timeline/Timeline';

const index = () => (
  <Container>
    <div className="flex-col">
      <h1 className="text-4xl text-gray-900 font-bold">Hi, I'm Jake.</h1>
      <p className="text-lg py-4 font-medium text-gray-700">
        I'm a software developer, tech enthusiast and live for designing and
        building things that live on the web. I'm currently building SMS
        messaging applications for Thrivent.
      </p>
      <NextLink href="/about" passHref>
        <button
          type="button"
          className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-500 hover:bg-blue-600 mr-2"
        >
          More about me
        </button>
      </NextLink>
      <NextLink href="/contact" passHref>
        <button
          type="button"
          className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-blue-700 bg-blue-100 hover:bg-blue-200 ml-2"
        >
          Get in touch
        </button>
      </NextLink>
    </div>
    <Timeline />
  </Container>
);

export default index;
