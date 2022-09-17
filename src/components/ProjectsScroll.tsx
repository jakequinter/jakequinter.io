import Image from 'next/image';
import Link from 'next/link';

import projects from '@/data/projects';

export default function ProjectsScroll() {
  return (
    <div className="max-w-screen-sm mx-auto">
      <h2 className="text-gray-900 dark:text-gray-50 text-lg font-semibold mb-6">
        Recent endeavors
      </h2>

      <div className="grid grid-cols-2 gap-4">
        {projects.map(project => (
          <Link href={project.url} key={project.id} passHref>
            <div className="relative cursor-pointer group">
              <Image
                className="object-cover rounded-xl group-hover:opacity-20"
                src={project.imageUrl}
                height="350"
                width="350"
              />

              <div className="hidden dark:text-gray-50 text-gray-900 group-hover:block absolute bottom-4 left-2">
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
