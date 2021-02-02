import React from 'react';
import Head from 'next/head';
import { useForm } from 'react-hook-form';

import { createFood } from '@/lib/db';
import { useAuth } from '@/lib/auth';

const FoodForm = () => {
  const auth = useAuth();
  const { handleSubmit, register } = useForm();

  const onCreateFood = ({
    name,
    description,
    link,
    type,
    jakeRating,
    jenRating,
    imageUrl
  }) => {
    const newFood = {
      authorId: auth.user.uid,
      createdAt: new Date().toISOString(),
      name,
      description,
      link,
      type,
      jakeRating,
      jenRating,
      imageUrl
    };

    createFood(newFood);
  };

  return (
    <div className="flex-row justify-between items-center">
      <Head>
        <title>Jake Quinter | Things</title>
      </Head>
      <div>
        <h3 className="text-4xl text-gray-900 text-center pb-8">
          Add new food
        </h3>
        <div>
          <form className="space-y-6" onSubmit={handleSubmit(onCreateFood)}>
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
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  placeholder="Regina's Pizzeria"
                  ref={register({
                    required: 'Required'
                  })}
                />
              </div>
            </div>

            <div>
              <label htmlFor="type" className="block text-gray-700">
                Type
              </label>
              <select
                id="type"
                name="type"
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                ref={register({
                  required: 'Required'
                })}
              >
                <option value="personal">Pizza</option>
                <option value="people">Breakfast & Dessert</option>
                <option value="book">Seafood</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700"
              >
                Description
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="description"
                  id="description"
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  placeholder="Naval is a must follow."
                  ref={register({
                    required: 'Required'
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
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  placeholder="Naval is a must follow."
                  ref={register({
                    required: 'Required'
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
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  placeholder="Naval is a must follow."
                  ref={register({
                    required: 'Required'
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
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  placeholder="https://websiteurl.com"
                  ref={register({
                    required: 'Required'
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
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  placeholder="https://websiteurl.com"
                  ref={register({
                    required: 'Required'
                  })}
                />
              </div>
            </div>

            <button
              className="mt-8 bg-gray-700 px-4 py-2 rounded text-white float-right hover:bg-gray-900"
              onClick={() => auth.signout()}
            >
              Sign out
            </button>
            <button
              className="mt-8 mr-4 bg-blue-500 px-4 py-2 rounded text-white float-right hover:bg-blue-600"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FoodForm;
