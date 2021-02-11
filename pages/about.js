import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { NextSeo } from 'next-seo';
import { FiLink } from 'react-icons/fi';

import Container from '@/components/Container';

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
      <h1 className="text-4xl text-gray-900 font-bold pb-4">About Me</h1>
      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2">
        <div className="pr-4">
          <p>
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
          <p className="pt-2">
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
          <p className="pt-2">
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
            height={1000}
            width={1500}
          />
        </div>
      </div>
      <div className="mt-16">
        <h3 className="text-2xl text-gray-900 font-bold pb-8">
          What I'm working on
        </h3>
        <div className="mt-4 py-4 px-8 rounded border border-light-gray-200">
          <div className="flex justify-between">
            <h5 className="text-lg font-medium text-gray-900 pb-2">Quisp</h5>
          </div>
          <div>
            <p>
              Quisp is a web application to help bar and restaurant owners
              digitize their sign-in and employee data. I'm reworking the{' '}
              <Link href="https://github.com/jakequinter/quisp-web-app">
                <a className="text-blue-500" target="_blank">
                  initial design
                </a>
              </Link>{' '}
              to be a Next.js application hosted on Vercel. Here is the{' '}
              <Link href="https://quispco-4437lwuug.vercel.app/">
                <a className="text-blue-500" target="_blank">
                  current development version
                </a>
              </Link>
              .
            </p>
            <p className="pt-2">
              * The development version is a work in progress, so you may come
              across bugs that I haven't worked out yet, placeholder images, and
              non-functioning implementations.
            </p>
          </div>
        </div>
        {/* </a> */}
        {/* </Link> */}
        <div className="mt-4 py-4 px-8 rounded border border-light-gray-200">
          <div className="flex">
            <h5 className="text-lg font-medium text-gray-900 pb-2">
              My personal site
            </h5>
          </div>
          <div>
            <p>
              This is my small slice of the internet. I developed this site as a
              tool to communicate with myself, potential employers, and whoever
              else I may come across in this life. Whenever I want to learn or
              test out something new, I use this site as my playground.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h3 className="text-2xl text-gray-900 font-bold pb-4">Other work</h3>
        <Link href="https://www.chippergolf.com">
          <a className="text-lg font-medium text-blue-500 pb-2" target="_blank">
            Chipper Golf
          </a>
        </Link>
        <p>
          In November 2019 I started working with the developer of Chipper Golf.
          The experience I gained and continue gaining are far and beyond any of
          the expectations I anticipated in the beginning. This is what
          transpired my passion for JavaScript and its libraries and frameworks
          like React. I have been soley interested in front-end technologies
          ever since.
        </p>
        <div className="pt-4">
          <Link href="https://www.playertrader.net">
            <a
              className="text-lg font-medium text-blue-500 pb-2"
              target="_blank"
            >
              PlayerTrader
            </a>
          </Link>
          <p>
            I have recently started working on front-end maintenance at
            PlayerTrader in my free time. I am in the very beginning with my
            time here at PlayerTrader, but the group has been awesome to work
            with and I've enjoyed implementing UI/UX features for their web
            application.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default About;
