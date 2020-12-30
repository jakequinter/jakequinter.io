import React from 'react';

const Thing = ({ id, link, title, type, description }) => {
  return (
    <div className="py-2">
      <h2 className="text-sm font-medium text-blue-500">
        <a href={link}>{title}</a>
      </h2>
      <em className="text-xs">{type}</em>
      <p>{description}</p>
    </div>
  );
};

export default Thing;
