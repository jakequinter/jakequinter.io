import React, { useState } from 'react';

import Container from './Container';
import ThingsForm from '@/components/ThingsForm';
import FoodForm from '@/components/FoodForm';

const UpdateSelection = () => {
  const [form, setForm] = useState(null);
  console.log(form);

  const determineForm = () => {
    if (form === 'Bookmarks') {
      return <ThingsForm />;
    } else if (form === 'Timeline') {
      return <TimelineForm />;
    } else if (form === 'Food') {
      return <FoodForm />;
    } else {
      return (
        <div className="flex justify-around">
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-blue-700 bg-blue-100 hover:bg-blue-200 ml-2"
            onClick={() => setForm('Bookmarks')}
          >
            Add a bookmark
          </button>
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-blue-700 bg-blue-100 hover:bg-blue-200 ml-2"
            onClick={() => setForm('Bookmarks')}
          >
            Add a timeline event
          </button>
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-blue-700 bg-blue-100 hover:bg-blue-200 ml-2"
            onClick={() => setForm('Food')}
          >
            Add a food
          </button>
        </div>
      );
    }
  };

  return <div>{determineForm()}</div>;
};

export default UpdateSelection;
