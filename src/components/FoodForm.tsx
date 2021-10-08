import React from 'react';
import Head from 'next/head';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import { createFood } from '@/lib/db';
import { useAuth } from '@/lib/auth';
import { box } from '@/styles/box';
import { text } from '@/styles/text';
import { input } from '@/styles/input';
import { button } from '@/styles/button';

type FormData = {
  name: string;
  description: string;
  link: string;
  jakeRating: string;
  jenRating: string;
  imageUrl: string;
};

const FoodForm = () => {
  const auth = useAuth();
  const { handleSubmit, register } = useForm();

  const onCreateFood = ({
    name,
    description,
    link,
    jakeRating,
    jenRating,
    imageUrl,
  }: FormData) => {
    const newFood = {
      authorId: auth.user.uid,
      createdAt: new Date().toISOString(),
      name,
      description,
      link,
      jakeRating,
      jenRating,
      imageUrl,
    };

    try {
      createFood(newFood);

      toast.success('Your food has been added.');
    } catch (error) {
      toast.error('Error: there was a problem');
    }
  };

  return (
    <div
      className={box({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '$6',
      })}
    >
      <Head>
        <title>Jake Quinter | Things</title>
      </Head>
      <div>
        <h3 className={text({ size: '7', css: { paddingBottom: '$4' } })}>
          Add new food
        </h3>
        <div>
          <form onSubmit={handleSubmit(onCreateFood)}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Restaurant name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="name"
                  id="name"
                  className={input()}
                  placeholder="Regina's Pizzeria"
                  ref={register({
                    required: 'Required',
                  })}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="jakeRating"
                className="block text-sm font-medium text-gray-700"
              >
                Jake's rating
              </label>
              <div className="mt-1">
                <input
                  type="number"
                  step=".1"
                  name="jakeRating"
                  id="jakeRating"
                  className={input()}
                  placeholder="Naval is a must follow."
                  ref={register({
                    required: 'Required',
                  })}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="jenRating"
                className="block text-sm font-medium text-gray-700"
              >
                Jen's rating
              </label>
              <div className="mt-1">
                <input
                  type="number"
                  step=".1"
                  name="jenRating"
                  id="jenRating"
                  className={input()}
                  placeholder="Naval is a must follow."
                  ref={register({
                    required: 'Required',
                  })}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="link"
                className="block text-sm font-medium text-gray-700"
              >
                Link
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="link"
                  id="link"
                  className={input()}
                  placeholder="https://websiteurl.com"
                  ref={register({
                    required: 'Required',
                  })}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="imageUrl"
                className="block text-sm font-medium text-gray-700"
              >
                Image URL
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="imageUrl"
                  id="imageUrl"
                  className={input()}
                  placeholder="https://websiteurl.com"
                  ref={register({
                    required: 'Required',
                  })}
                />
              </div>
            </div>

            <div
              className={box({
                display: 'flex',
                justifyContent: 'space-around',
              })}
            >
              <button className={button()} onClick={() => auth.signout()}>
                Sign out
              </button>
              <button className={button()} type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FoodForm;
