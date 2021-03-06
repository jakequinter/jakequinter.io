import React, { useState } from 'react';

import Container from './Container';
import ThingsForm from '@/components/ThingsForm';
import FoodForm from '@/components/FoodForm';
import { button } from '@/styles/button';
import { box } from '@/styles/box';

const UpdateSelection = () => {
  const [form, setForm] = useState(null);

  const determineForm = () => {
    if (form === 'Bookmarks') {
      return <ThingsForm />;
    } else if (form === 'Food') {
      return <FoodForm />;
    } else {
      return (
        <div
          className={box({
            display: 'flex',
            justifyContent: 'space-around',
            marginTop: '$6',
          })}
        >
          <button
            type="button"
            className={button()}
            onClick={() => setForm('Bookmarks')}
          >
            Add bookmark
          </button>
          <button
            type="button"
            className={button()}
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
