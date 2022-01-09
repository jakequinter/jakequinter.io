import React, { useState } from 'react';

import ThingsForm from '@/components/ThingsForm';
import FoodForm from '@/components/FoodForm';

const UpdateSelection = () => {
  const [form, setForm] = useState('');

  const determineForm = () => {
    if (form === 'Bookmarks') {
      return <ThingsForm />;
    } else if (form === 'Food') {
      return <FoodForm />;
    } else {
      return (
        <div className="flex justify-around mt-20">
          <button
            type="button"
            className="px-4 py-2 border border-zinc-300 hover:border-zinc-400 dark:border-zinc-700 dark:hover:border-zinc-600 rounded"
            onClick={() => setForm('Bookmarks')}
          >
            Add bookmark
          </button>
          <button
            type="button"
            className="px-4 py-2 border border-zinc-300 hover:border-zinc-400 dark:border-zinc-700 dark:hover:border-zinc-600 rounded"
            onClick={() => setForm('Food')}
          >
            Add food
          </button>
        </div>
      );
    }
  };

  return <div>{determineForm()}</div>;
};

export default UpdateSelection;
