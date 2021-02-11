import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { NextSeo } from 'next-seo';

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
      <h1 className="text-4xl text-gray-900 font-bold pb-8">About Me</h1>
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
            height={1000}
            width={1500}
          />
        </div>
      </div>
      <div className="mt-16">
        <h3 className="text-2xl text-gray-900 font-bold pb-4">
          What I'm working on
        </h3>
        <div className="pb-12">
          <div className="pb-2">
            <h5 className="text-xl text-gray-900">Quisp</h5>
          </div>
          <div>
            <p className="pb-4">
              A web application to help bar and restaurant owners digitize their
              sign-in and employee data. I am currently modifying a
            </p>
            <div class="rounded-md bg-blue-100 p-4">
              <div class="flex">
                <div class="flex-shrink-0">
                  <svg
                    class="h-5 w-5 text-blue-600"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <div class="ml-3 flex-1 md:flex md:justify-between">
                  <p class="text-sm text-blue-700 pb-4">
                    This is the current development version and is a work in
                    progress. Therefore, you will come across bugs that I
                    haven't worked out yet, placeholder images, and
                    non-functioning implementations.
                  </p>
                </div>
              </div>
              <Link href="https://quispco-4437lwuug.vercel.app/">
                <a
                  className="pl-8 font-medium text-blue-800 hover:text-blue-900"
                  target="_blank"
                >
                  View site <span aria-hidden="true">&rarr;</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="">
          <div className="flex">
            <h5 className="text-xl text-gray-900 pb-2">My personal site</h5>
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
      <div className="mt-16">
        <h3 className="text-2xl text-gray-900 font-bold pb-4">Other work</h3>
        <div className="pb-12">
          <h5 className="text-xl text-gray-900 pb-2">Chipper Golf</h5>
          <p>
            In November 2019 I started working with the developer of{' '}
            <Link href="https://www.chippergolf.com">
              <a className="text-blue-500" target="_blank">
                Chipper Golf
              </a>
            </Link>
            . The experience I gained and continue gaining are far and beyond
            any of the expectations I anticipated in the beginning. This is what
            transpired my passion for JavaScript and its libraries and
            frameworks like React. I have been soley interested in front-end
            technologies ever since.
          </p>
        </div>
        <div>
          <h5 className="text-xl text-gray-900 pb-2">PlayerTrader</h5>

          <p>
            I have recently started working on front-end maintenance at{' '}
            <Link href="https://www.playertrader.net">
              <a className="text-blue-500" target="_blank">
                PlayerTrader
              </a>
            </Link>{' '}
            in my free time. I am in the very beginning with my time here at
            PlayerTrader, but the group has been awesome to work with and I've
            enjoyed implementing UI/UX features for their web application.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default About;
