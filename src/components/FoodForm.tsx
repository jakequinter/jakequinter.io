import React, { useState } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import { useForm } from 'react-hook-form';
import { signOut } from 'next-auth/react';
import toast from 'react-hot-toast';

type FormData = {
  restaurantName: string;
  jakeRating: string;
  jenRating: string;
  link: string;
  image: FileList;
};

type UploadImageResponse = {
  secure_url: string;
};

const FoodForm = () => {
  const [previewImage, setPreviewImage] = useState('');
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const uploadImage = async (
    image: File,
    signature: string,
    timestamp: number
  ): Promise<UploadImageResponse> => {
    const url = `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/upload/`;
    const formData = new FormData();
    formData.append('file', image);
    formData.append('signature', signature);
    formData.append('timestamp', timestamp.toString());
    formData.append('api_key', process.env.NEXT_PUBLIC_CLOUDINARY_KEY ?? '');

    const res = await fetch(url, {
      method: 'POST',
      body: formData,
    });
    const data = await res.json();
    console.log('data', data);

    return data;
  };

  const onSubmit = async (values: FormData) => {
    const res = await fetch('/api/image');
    const { timestamp, signature } = await res.json();

    const imageData = await uploadImage(values.image[0], signature, timestamp);
    // toast.success('Your food has been added.');

    // toast.error('Error: there was a problem');
  };

  return (
    <>
      <Head>
        <title>Jake Quinter | Things</title>
      </Head>
      <div>
        <h1 className="text-4xl text-gray-900 font-bold text-center mb-12">
          Add new food
        </h1>
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-6">
              <label htmlFor="restaurantName">
                Restaurant name
                <input
                  type="text"
                  id="restaurantName"
                  className="mt-1 shadow-sm block w-full sm:text-sm border-gray-400 rounded-md"
                  {...register('restaurantName', { required: true })}
                />
              </label>
            </div>

            <div className="mb-6">
              <label htmlFor="jakeRating">
                Jake rating
                <input
                  type="number"
                  id="jakeRating"
                  className="mt-1 shadow-sm block w-full sm:text-sm border-gray-400 rounded-md"
                  {...register('jakeRating', { required: true })}
                />
              </label>
            </div>

            <div className="mb-6">
              <label htmlFor="jenRating">
                Jen rating
                <input
                  type="number"
                  id="jenRating"
                  className="mt-1 shadow-sm block w-full sm:text-sm border-gray-400 rounded-md"
                  {...register('jenRating', { required: true })}
                />
              </label>
            </div>

            <div className="mb-6">
              <label htmlFor="link">
                Restaurant link
                <input
                  type="text"
                  id="link"
                  className="mt-1 shadow-sm block w-full sm:text-sm border-gray-400 rounded-md"
                  {...register('link', { required: true })}
                />
              </label>
            </div>

            <div className="mb-6">
              <label
                htmlFor="image"
                className="mt-1 shadow-sm block w-full p-2 border-2 border-dashed border-gray-400 cursor-pointer rounded-md"
              >
                Click to add image (4:3)
                <input
                  type="file"
                  id="image"
                  accept="image/*"
                  className="hidden"
                  {...register('image', {
                    validate: (fileList: FileList) => {
                      if (fileList.length === 1) return true;

                      return 'Please upload an employee image';
                    },
                  })}
                  onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                    if (e?.target?.files?.[0]) {
                      const file = e.target.files[0];
                      const reader = new FileReader();
                      reader.onloadend = () => {
                        setPreviewImage(reader.result as string);
                      };
                      reader.readAsDataURL(file);
                    }
                  }}
                />
              </label>

              {previewImage && (
                <div className="mt-4 text-center">
                  <Image
                    className="object-cover rounded"
                    width="384"
                    height={`${(4 / 3) * 384}px`}
                    src={previewImage}
                  />
                </div>
              )}
              {errors.image && (
                <span data-testid="error" className="text-redPrimary">
                  {errors.image.message}
                </span>
              )}
            </div>

            <div className="flex justify-between">
              <button
                type="submit"
                className="text-center w-full py-3 mr-2 border text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-gray-900 hover:opacity-90 focus:outline-none"
              >
                Submit
              </button>
              <button
                type="button"
                className="text-center w-full py-3 border border-gray-400 hover:border-gray-600 text-sm leading-4 font-medium rounded-md shadow-sm text-gray-900 bg-white focus:outline-none"
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

export default FoodForm;
