import React from 'react';
import Link from 'next/link';

const Thing = ({ id, link, title, type, description }) => {
  return (
    <div className="py-2">
      <div>
        <Link href={link}>
          <a className="font-medium text-blue-500" target="_blank">
            {title}
          </a>
        </Link>
      </div>
      <em className="text-xs">{type}</em>
      <p>{description}</p>
    </div>
  );
};

export default Thing;
