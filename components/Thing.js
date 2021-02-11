import React from 'react';
import Link from 'next/link';

const Thing = ({ id, link, title, type, description }) => {
  return (
    <div className="py-4">
      <div className="flex items-center">
        <Link href={link}>
          <a className="font-medium text-blue-500" target="_blank">
            {title}
          </a>
        </Link>
        <span class="inline-flex ml-2 items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-200 text-gray-500">
          {type}
        </span>
      </div>
      {/* <em className="text-xs">{type}</em> */}
      <p>{description}</p>
    </div>
  );
};

export default Thing;
