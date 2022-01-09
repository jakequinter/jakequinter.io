import Head from 'next/head';
import { useForm } from 'react-hook-form';
import { signOut } from 'next-auth/react';
import toast from 'react-hot-toast';

type FormData = {
  title: string;
  description: string;
  link: string;
  type: string;
};

const ThingsForm = () => {
  const { handleSubmit, register } = useForm();

  const onSubmit = async (values: FormData) => {
    try {
      const res = await fetch('/api/bookmarks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...values,
        }),
      });

      if (res.ok) {
        toast.success('Your food has been added.');
      }
    } catch (error) {
      toast.error('Error: there was a problem');
    }
  };

  return (
    <>
      <Head>
        <title>Jake Quinter | Things</title>
      </Head>
      <div>
        <h1 className="text-4xl text-zinc-900 dark:text-zinc-50 font-bold text-center mb-12">
          Add new food
        </h1>
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-6">
              <label htmlFor="restaurantName">
                Title
                <input
                  type="text"
                  id="title"
                  className="mt-1 shadow-sm block w-full sm:text-sm border-zinc-300 dark:border-zinc-700 dark:bg-zinc-800 rounded-md"
                  {...register('title', { required: true })}
                />
              </label>
            </div>

            <div className="mb-6">
              <label htmlFor="jakeRating">
                Description
                <input
                  type="text"
                  id="description"
                  className="mt-1 shadow-sm block w-full sm:text-sm border-zinc-300 dark:border-zinc-700 dark:bg-zinc-800 rounded-md"
                  {...register('description', { required: true })}
                />
              </label>
            </div>

            <div className="mb-6">
              <label htmlFor="link">
                Link
                <input
                  type="text"
                  id="link"
                  className="mt-1 shadow-sm block w-full sm:text-sm border-zinc-300 dark:border-zinc-700 dark:bg-zinc-800 rounded-md"
                  {...register('link', { required: true })}
                />
              </label>
            </div>

            <div className="mb-6">
              <label htmlFor="type">
                Type
                <select
                  id="type"
                  className="mt-1 shadow-sm block w-full sm:text-sm border-zinc-300 dark:border-zinc-700 dark:bg-zinc-800 rounded-md"
                  {...register('type', { required: true })}
                >
                  <option value="people">People</option>
                  <option value="site">Site</option>
                  <option value="book">Book</option>
                  <option value="podcast">Podcast</option>
                </select>
              </label>
            </div>

            <div className="flex justify-between">
              <button
                type="submit"
                className="text-center w-full py-3 mr-2 border dark:border-zinc-700 dark:hover:border-zinc-600 text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-zinc-900 hover:bg-zinc-800 dark:hover:bg-inherit focus:outline-none"
              >
                Submit
              </button>
              <button
                type="button"
                className="text-center w-full py-3 border border-zinc-300 hover:border-zinc-400 text-sm leading-4 font-medium rounded-md shadow-sm text-zinc-900 bg-white dark:hover:bg-zinc-100 focus:outline-none"
                onClick={() => signOut()}
              >
                Sign out
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ThingsForm;
