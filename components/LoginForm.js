import React from 'react';
import Head from 'next/head';
import { FcGoogle } from 'react-icons/fc';

import { useAuth } from '@/lib/auth';

const LoginForm = () => {
  const auth = useAuth(0);

  return (
    <div className="flex-row justify-between items-center mx-auto">
      <Head>
        <title>Jake Quinter | Things</title>
      </Head>
      <div className="rounded-md bg-yellow-100 p-4 mb-8">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg
              className="h-5 w-5 text-yellow-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-yellow-800">Attention</h3>
            <div className="mt-2 text-sm text-yellow-700">
              <p>
                This page is intended for the developer and owner of this site
                only!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <button
          className=" flex justify-center items-center w-3/5 bg-white py-3 text-gray-900 font-medium hover:bg-gray-100 rounded"
          onClick={() => auth.signinWithGoogle()}
        >
          <FcGoogle className="mr-2" size={20} /> Sign In with Google
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
