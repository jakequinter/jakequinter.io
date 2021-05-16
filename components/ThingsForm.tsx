import Head from 'next/head';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import { createThing } from '@/lib/db';
import { useAuth } from '@/lib/auth';
import { box } from '@/styles/box';
import { text } from '@/styles/text';
import { input } from '@/styles/input';
import { button } from '@/styles/button';

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
      link,
    };

    try {
      createThing(newThing);

      toast.success('Your thing has been added.');
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
      })}
    >
      <Head>
        <title>Jake Quinter | Things</title>
      </Head>
      <div>
        <h3 className={text({ size: '7', css: { paddingBottom: '$4' } })}>
          Add new thing
        </h3>
        <div>
          <form onSubmit={handleSubmit(onCreateThing)}>
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700"
              >
                Title
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="title"
                  id="title"
                  className={input()}
                  placeholder="Naval"
                  ref={register({
                    required: 'Required',
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
                className={input()}
                ref={register({
                  required: 'Required',
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
              <div className="mt-1">
                <input
                  type="text"
                  name="description"
                  id="description"
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

            <div
              className={box({
                display: 'flex',
                justifyContent: 'space-around',
              })}
            >
              <button className={button()} type="submit">
                Submit
              </button>
              <button className={button()} onClick={() => auth.signout()}>
                Sign out
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ThingsForm;
