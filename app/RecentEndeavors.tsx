'use client';

import { useState } from 'react';
import Image from 'next/image';

const projects = [
  {
    name: 'jakequinter.io',
    logo: '/images/jake.svg',
    description: 'This is my personal slice of the internet. ',
  },
  {
    name: 'Merryfield',
    logo: '/images/merryfield.svg',
    description:
      'This is where I work. I am responsible for all Merryfield web applications, and am currently rewriting our marketing website in Next.js and TypeScript.',
  },
  {
    name: 'Funds',
    logo: '/images/funds.svg',
    description:
      'A personal finance app that I built to help me track my spending and investments. Built with React, TypeScript, and Tailwind CSS.',
  },
  {
    name: 'Bison Drywall',
    logo: '/images/bison.svg',
    description:
      'A simple, lightweight, and fast static site generator. Built with Rust and Handlebars.',
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
