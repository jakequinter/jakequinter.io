import React from 'react';
import Image from 'next/image';
import { NextSeo } from 'next-seo';

import Container from '@/components/Container';
import Timeline from '@/components/timeline/Timeline';
import { text } from '@/styles/text';
import { box } from '@/styles/box';
import { link } from '@/styles/link';
import { image } from '@/styles/image';
import { grid } from '@/styles/grid';

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
      <h1 className="text-gray-900 text-5xl mb-8 font-semibold">About me</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
        <div className="col-span-2">
          <p className="mb-4">
            Hello, I’m Jake. I’m a software engineer based in Boston, MA. I work
            on the B2B team at{' '}
            <a
              className={link()}
              target="_blank"
              href="https://www.deltadefense.com/"
            >
              Delta Defense
            </a>
            .
          </p>
          <p className="mb-4">
            Outside of my full-time role, I tinker with indie projects and build
            meaningful software to help people. I am becoming more interested in
            the thought of entrepreneurship and indie software.
          </p>
          <p>
            I grew up in Wisconsin but moved to Boston at the beginning of the
            year. When I find myself needing to step away from the computer, I
            enjoy reading, health and fitness, spending time with friends and
            family, the outdoors, and exploring my new home.
          </p>
        </div>
        <div className="text-center sm:text-start ml-0 sm:ml-auto">
          <Image
            className={image()}
            src="/jake.png"
            alt="Jake Quinter"
            height={200}
            width={200}
          />
        </div>
      </div>

      <Timeline />
    </Container>
  );
};

export default About;
