import React from 'react';

import determineLogo from '@/utils/determineLogo';

const Timeline2020 = ({ data }) => {
  return (
    <div className="mb-12">
      <h3 className="text-xl text-gray-900 font-medium ">2020</h3>
      <hr className="mt-1 mb-6" />
      <div className="ml-2">
        <ul className="-mb-8">
          {data &&
            data.years.map((item, i) => (
              <li key={item.id}>
                <div className="relative pb-8">
                  {data.years.length === i + 1 ? null : (
                    <span
                      className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                      aria-hidden="true"
                    ></span>
                  )}
                  <div className="relative flex space-x-3">
                    <div>
                      <span className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center ring-8 ring-gray-100">
                        {determineLogo(item.type)}
                      </span>
                    </div>
                    <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                      <div>
                        <p className="font-medium text-gray-900">
                          {item.title}
                        </p>
                        <p className="text-sm pt-4">{item.description}</p>
                      </div>
                      <div className="text-right text-sm whitespace-nowrap text-gray-500">
                        <em>{item.date}</em>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Timeline2020;
