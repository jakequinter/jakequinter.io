import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { NextSeo } from 'next-seo';

import Container from '@/components/Container';

const About = () => {
  return (
    <Container>
      <NextSeo
        title="Jake Quinter 👨‍💻"
        canonical="https://jakequinter.io/about"
        openGraph={{
          url: 'https://jakequinter.io/about',
          title: 'Jake Quinter 👨‍💻',
        }}
      />
      <h1 className="text-zinc-900 dark:text-zinc-50 text-5xl mb-8 font-semibold">
        About me
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
        <div className="col-span-2">
          <p className="mb-4">
            Hello, I’m Jake. I’m a software engineer based in Boston, MA. I work
            on the engineering team at{' '}
            <Link href="https://www.merryfield.com/" passHref>
              <a className="text-blue-500 dark:text-orange-500 hover:underline underline-offset-2">
                Merryfield
              </a>
            </Link>
            .
          </p>
          <p className="mb-4">
            Outside of my full-time role, I tinker with indie projects and build
            meaningful software to help people. I am becoming more interested in
            the thought of entrepreneurship and indie software.
          </p>
          <p>
            I grew up in Wisconsin but moved to Boston at the beginning of 2021.
            When I find myself needing to step away from the computer, I enjoy
            reading, health and fitness, spending time with friends and family,
            the outdoors, and exploring my new home.
          </p>
        </div>
        <div className="text-center sm:text-start ml-0 sm:ml-auto">
          <Image src="/jake.png" alt="Jake Quinter" height={200} width={200} />
        </div>
      </div>
      <div className="mt-16">
        <h2 className="text-2xl text-zinc-900 dark:text-zinc-50 font-semibold mb-8">
          Currently
        </h2>
        <p>
          Dedicating my time to improving myself through reading, learning, and
          building products. In 2022, I'm focusing more on shipping.
        </p>
        <p className="mt-4">
          Building{' '}
          <Link href="https://www.funds.fyi" passHref>
            <a className="text-blue-500 dark:text-orange-500 hover:underline underline-offset-2">
              Funds
            </a>
          </Link>
          , a different take on budgeting software. What started as a simple web
          app to make myself frequent my budgeting software tool more often has
          also become my defacto project for experimenting with learning Swift
          and SwiftUI.
        </p>
        <p className="mt-4">
          Diving into learning Swift and SwiftUI. Interested in C/C++, and
          dedicated to React, Next.js, and TypeScript for building user
          interfaces.
        </p>
      </div>
    </Container>
  );
};

export default About;
