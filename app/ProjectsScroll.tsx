import Image from 'next/image';
import Link from 'next/link';
import { ArrowSquareOut } from 'phosphor-react';

import projects from '../data/projects';

export default function ProjectsScroll() {
  return (
    <div className="mx-auto max-w-screen-sm">
      <h2 className="mb-6 text-lg font-semibold text-gray-900 dark:text-gray-50">
        Recent endeavors
      </h2>

      <div className="grid grid-cols-2 gap-4">
        {projects.map(project => (
          <Link href={project.url} key={project.id} passHref>
            <div className="group relative cursor-pointer">
              <Image
                className="rounded-xl object-cover group-hover:opacity-20"
                src={project.imageUrl}
                alt={project.description}
                height="350"
                width="350"
              />

              <ArrowSquareOut
                className="absolute top-2 right-2 hidden text-gray-900 group-hover:block dark:text-gray-50"
                size="20"
              />

              <div className="absolute bottom-4 left-2 hidden text-gray-900 group-hover:block dark:text-gray-50">
                <h3 className="font-semibold">{project.name}</h3>

                <p className="text-xs">{project.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
