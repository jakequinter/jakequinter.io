'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    name: 'jakequinter.io',
    logo: '/images/jake.svg',
    description:
      'My home on the internet. Here, I experiment with new technologies I am interested in trying.',
  },
  {
    name: 'Merryfield',
    logo: '/images/merryfield.svg',
    description:
      'This is where I work and where I am responsible for all Merryfield web applicaitons. Recently, I rewrote our marketing website in Next.js and TypeScript. Currently, we are in the process of creating a new web application and busy launch Learn & Earn.',
  },
  {
    name: 'Funds',
    logo: '/images/funds.svg',
    description:
      "Funds is where I'm experimenting with and learning Swift and Swiftui. It's a pretty straightforward app that allows users to keep track of different accounts on a monthly basis.",
  },
  {
    name: 'Bison Drywall',
    logo: '/images/bison.svg',
    description:
      'A website I build for a friend who started his own drywall business.',
  },
];

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

      <div className="space-y-4 rounded-t-3xl border-l border-r border-t border-gray-200 bg-gradient-to-b from-white to-gray-100 p-8">
        <h3 className="text-center text-lg font-semibold">
          {selectedProject.name}
        </h3>
        <p>{selectedProject.description}</p>
      </div>
    </section>
  );
}
