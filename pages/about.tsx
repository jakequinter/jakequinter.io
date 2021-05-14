import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { NextSeo } from 'next-seo';

import Container from '@/components/Container';
import { text } from '../styles/text';

const BuiltWithItem = ({ text, icon }) => (
  <div className="flex flex-col justify-center">
    <p>{text}</p>
    <span className="mt-2 mx-auto text-gray-300">{icon}</span>
  </div>
);

const About = () => {
  return (
    <Container>
      <NextSeo
        title="Jake Quinter 👨‍💻"
        canonical="https://jakequinter.io/about"
        openGraph={{
          url: 'https://jakequinter.io/about',
          title: 'Jake Quinter 👨‍💻'
        }}
      />
      <h1
        className={text({
          size: '7',
          weight: 'medium',
          css: { marginBottom: '$4' }
        })}
      >
        About me
      </h1>
      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2">
        <div className="pr-0 md:pr-16">
          <p className="pb-4">
            Hello, I’m Jake Quinter. I'm a software developer based in Boston,
            MA. I work on the Application Maintenance and Production Support
            team at{' '}
            <a
              className="text-blue-500"
              target="_blank"
              href="https://www.thrivent.com"
            >
              Thrivent
            </a>
            . Whether you stumbled upon my site or have been here before,
            welcome!
          </p>
          <p className="pb-4">
            Besides work, I am currently finishing up my business minor at{' '}
            <a
              className="text-blue-500"
              target="_blank"
              href="https://lakeland.edu/"
            >
              Lakeland University
            </a>{' '}
            to fulfill my credit requirements for a Bachelor of Science in
            Computer Science.
          </p>
          <p>
            In my free time I enjoy learning and reading about various
            technologies. When I find myself needing to step away from the
            computer, I enjoy reading, health and fitness, spending time with
            friends and family, and the outdoors.
          </p>
        </div>
        <div className="my-auto">
          <Image
            className="rounded-lg"
            src="/jake.jpg"
            alt="Jake Quinter"
            height={300}
            width={500}
          />
        </div>
      </div>
    </Container>
  );
};

export default About;
