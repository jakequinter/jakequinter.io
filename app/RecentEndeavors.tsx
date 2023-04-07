'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, GithubLogo } from 'phosphor-react';
import { motion } from 'framer-motion';

const projects = [
  {
    name: 'jakequinter.io',
    logo: '/images/jake.svg',
    description:
      'My home on the internet. Here, I experiment with new technologies I am interested in trying. I recently migrated this site to Next.js 13 using their new app directory and React Server Components.',
    githubUrl: 'https://github.com/jakequinter/jakequinter.io',
  },
  {
    name: 'Merryfield',
    logo: '/images/merryfield.svg',
    description:
      'This is where I work and where I am responsible for all Merryfield web applications. Recently, I rewrote our marketing website in Next.js and TypeScript. Currently, we are in the process of creating two new web applications and busy launch Learn & Earn.',
    url: 'https://www.merryfield.com/',
  },
  {
    name: 'Funds',
    logo: '/images/funds.svg',
    description:
      "Funds is where I'm experimenting and learning Swift and SwiftUI, a simple native app. It enables users to monitor their accounts, such as banking, investments, or crypto, and monitor their value over time.",
    url: 'https://www.funds.fyi',
    githubUrl: 'https://github.com/jakequinter/funds-swift',
  },
  {
    name: 'Bison Drywall',
    logo: '/images/bison.svg',
    description:
      'A website I built for a friend who started his own drywall business. The most enjoyable part was creating the photos marquee section, which sources photos from his Facebook account through the Facebook Graph API.',
    url: 'https://bisondrywall.io',
    githubUrl: 'https://github.com/jakequinter/bisondrywall.io',
  },
];

const urlVariants = {
  hover: {
    x: 4,
  },
};

// make github icon spin
const githubVariants = {
  hover: {
    rotate: 360,
    transition: {
      duration: 0.5,
    },
  },
};

export default function RecentEndeavors() {
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  return (
    <section>
      <h2 className="text-xl font-semibold text-gray-900">Recent Endeavors</h2>
      <div className="my-4 flex gap-2">
        {projects.map(project => (
          <button
            key={project.name}
            onClick={() => setSelectedProject(project)}
          >
            <Image
              src={project.logo}
              alt={`${project.name} logo`}
              width={64}
              height={64}
            />
          </button>
        ))}
      </div>

      <div className="space-y-8 rounded-t-3xl border-l border-r border-t border-gray-200 bg-gradient-to-b from-white to-gray-100 px-8 pt-8">
        <h3 className="text-center text-lg font-semibold">
          {selectedProject.name}
        </h3>
        <p>{selectedProject.description}</p>

        <div className="flex space-x-4">
          {selectedProject.url ? (
            <Link className="w-full" href={selectedProject.url}>
              <motion.button
                whileHover="hover"
                className="inline-flex w-full items-center justify-center rounded-lg bg-black py-2 px-4 text-white"
              >
                Visit
                <motion.span variants={urlVariants} className="ml-2">
                  <ArrowRight />
                </motion.span>
              </motion.button>
            </Link>
          ) : null}

          {selectedProject.githubUrl ? (
            <Link className="w-full" href={selectedProject.githubUrl}>
              <motion.button
                whileHover="hover"
                className="inline-flex w-full items-center justify-center rounded-lg bg-emerald-600 py-2 px-4 text-white"
              >
                View source
                <motion.span variants={githubVariants} className="ml-2">
                  <GithubLogo />
                </motion.span>
              </motion.button>
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}
