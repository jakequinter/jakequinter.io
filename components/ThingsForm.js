import React from 'react';
import Head from 'next/head';
import { useForm } from 'react-hook-form';

import { createThing } from '@/lib/db';
import { useAuth } from '@/lib/auth';

const ThingsForm = () => {
  const auth = useAuth();
  const { handleSubmit, register } = useForm();

  const onCreateThing = ({ title, type, description, link }) => {
    const newThing = {
      authorId: auth.user.uid,
      createdAt: new Date().toISOString(),
      title,
      type,
      description,
      link
    };

    createThing(newThing);
  };

  return (
    <div className="flex-row justify-between items-center">
      <Head>
        <title>Jake Quinter | Things</title>
      </Head>
      <div>
        <div>
          <form className="space-y-6" onSubmit={handleSubmit(onCreateThing)}>
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700"
              >
                Title
              </label>
              <div class="mt-1">
                <input
                  type="text"
                  name="title"
                  id="title"
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  placeholder="Naval"
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
                class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                ref={register({
                  required: 'Required'
                })}
              >
                <option value="personal">Personal</option>
                <option value="people">People</option>
                <option value="book">Book</option>
                <option value="podcast">Podcast</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700"
              >
                Description
              </label>
              <div class="mt-1">
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
                htmlFor="link"
                className="block text-sm font-medium text-gray-700"
              >
                Link
              </label>
              <div class="mt-1">
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

export default ThingsForm;
