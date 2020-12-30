import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { NextSeo } from 'next-seo';
import { AiOutlineHtml5, AiOutlineCloudServer } from 'react-icons/ai';
import { DiReact, DiJsBadge } from 'react-icons/di';
import {
  SiFirebase,
  SiJava,
  SiMongodb,
  SiNextDotJs,
  SiTailwindcss,
  SiTypescript
} from 'react-icons/si';
import {
  FaAdobe,
  FaCcStripe,
  FaCode,
  FaNodeJs,
  FaShippingFast
} from 'react-icons/fa';
import { FiDatabase, FiLink } from 'react-icons/fi';

import Container from '@/components/Container';

const BuiltWithItem = ({ text, icon }) => (
  <div className="ml-2 mb-4">
    <div className="flex flex-col justify-center">
      <p>{text}</p>
      <span className="mt-2 mx-auto text-gray-300">{icon}</span>
    </div>
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
            Hello, I’m Jake Quinter. I'm a software developer based in Appleton,
            WI. I work on the Application Maintenance and Production Support
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
      <div className="mt-8">
        <h3 className="text-2xl text-gray-900 font-bold pb-4">
          What I'm working on
        </h3>
        <div pb={4}>
          <div className="flex">
            <h5 className="text-lg font-medium text-gray-900 pb-4">
              jenniferspick.com
            </h5>
            {/* <Link
                _hover={{ color: '#4970FB' }}
                ml={2}
                isExternal
                href="https://jenniferspick.com"
              >
                <FiLink />
              </Link> */}
          </div>
          <div>
            <p>
              A personal website that I built to start transitioning from
              JavaScript to TypeScript. I also finally got started experimenting
              with Tailwind CSS, and I love it! This is a Next.js application
              hosted on Vercel.
            </p>
          </div>
          <div className="flex justify-between pt-4">
            <BuiltWithItem text="Next.js" icon={<SiNextDotJs />} />
            <BuiltWithItem text="TypeScript" icon={<SiTypescript />} />
            <BuiltWithItem text="Firebase" icon={<SiFirebase />} />
            <BuiltWithItem text="Tailwind CSS" icon={<SiTailwindcss />} />
          </div>
        </div>

        <div>
          <div className="pt-4">
            <div className="flex">
              <h5 className="text-lg font-medium text-gray-900 pb-4">Quisp</h5>
            </div>
            <div>
              <p>
                A web application to help bar and restaurant owners digitize
                their sign-in and employee data. Add and authorize your
                employees, set employee access and permissions, and add members
                to digitally keep track of your sign-in members.
              </p>
            </div>
            {/* <Image src="/quisp.svg" alt="Quisp" height={1000} width={2000} /> */}
            <div className="flex justify-between pt-4">
              <BuiltWithItem text="React" icon={<DiReact />} />
              <BuiltWithItem text="Node.js" icon={<FaNodeJs />} />
              <BuiltWithItem text="Express" icon={<FaShippingFast />} />
              <BuiltWithItem text="MongoDB" icon={<SiMongodb />} />
              <BuiltWithItem text="Stripe" icon={<FaCcStripe />} />
            </div>
          </div>
        </div>

        <div>
          <div className="pt-4">
            <div className="flex">
              <h5 className="text-lg font-medium text-gray-900 pb-4">
                My personal site
              </h5>
            </div>
            <div>
              <p>
                This is my small slice of the internet. I developed this site as
                a tool to communicate with myself, potential employers, and
                whoever else I may feel like communicating with. Also, whenever
                I want to learn or test out something new, I use this site as my
                playground. This site is brand spanking new and I'm excited to
                see how my personal site evolves as time goes on. The high
                priority development plans are to migrate over to TypeScript and
                modify the styles to use Tailwind CSS. The feature(s) I'm
                thinking of implementing are now down to a blog because I
                recently incorporated the API and Bookmarks page.
              </p>
            </div>
            <div className="flex justify-between pt-4">
              <BuiltWithItem text="Next.js" icon={<SiNextDotJs />} />
              <BuiltWithItem text="Firebase" icon={<SiFirebase />} />
              <BuiltWithItem text="Chakra UI" icon={<FaCode />} />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default About;
