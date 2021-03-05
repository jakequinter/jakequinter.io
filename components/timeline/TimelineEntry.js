import React from 'react';

const TimelineEntry = ({ title, description, date, logo, isLast = false }) => {
  return (
    <li>
      <div className="relative pb-12">
        {!isLast ? (
          <span
            className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
            aria-hidden="true"
          ></span>
        ) : null}
        <div className="relative flex space-x-8">
          <div>
            <span className="h-8 w-8 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center ring-8 ring-gray-100">
              {logo}
            </span>
          </div>
          <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
            <div>
              <p className="font-medium text-gray-900">{title}</p>
              <p className="text-sm pt-4">{description}</p>
            </div>
            <div className="text-right text-sm whitespace-nowrap text-gray-500">
              <em>{date}</em>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default TimelineEntry;
