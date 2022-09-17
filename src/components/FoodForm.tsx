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
  error?: {
    message: string;
  };
};

const FoodForm = () => {
  const [previewImage, setPreviewImage] = useState('');
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>();

  const uploadImage = async (
    image: File,
    signature: string,
    timestamp: number
  ): Promise<UploadImageResponse> => {
    const url = `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/upload/`;
    const formData = new FormData();
    formData.append('file', image);
    formData.append(
      'upload_preset',
      process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET as string
    );
    formData.append('use_filename', 'true');
    formData.append('signature', signature);
    formData.append('timestamp', timestamp.toString());
    formData.append('api_key', process.env.NEXT_PUBLIC_CLOUDINARY_KEY ?? '');

    const res = await fetch(url, {
      method: 'POST',
      body: formData,
    });

    return res.json();
  };

  const onSubmit = async (values: FormData) => {
    const res = await fetch('/api/image');
    const { timestamp, signature } = await res.json();

    const imageData = await uploadImage(values.image[0], signature, timestamp);

    if (imageData.error) {
      toast.error('Error: there was a problem uploading image to Cloudinary');
    } else {
      const res = await fetch('/api/food', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...values,
          jakeRating: Number(values.jakeRating),
          jenRating: Number(values.jenRating),
          image: imageData.secure_url,
        }),
      });

      if (res.ok) {
        toast.success('Your food has been added.');
      }
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
                Restaurant name
                <input
                  type="text"
                  id="restaurantName"
                  className="mt-1 shadow-sm block w-full sm:text-sm border-zinc-300 dark:border-zinc-700 dark:bg-zinc-800 rounded-md"
                  {...register('restaurantName', { required: true })}
                />
              </label>
            </div>

            <div className="mb-6">
              <label htmlFor="jakeRating">
                Jake rating
                <input
                  type="number"
                  step="0.1"
                  id="jakeRating"
                  className="mt-1 shadow-sm block w-full sm:text-sm border-zinc-300 dark:border-zinc-700 dark:bg-zinc-800 rounded-md"
                  {...register('jakeRating', { required: true })}
                />
              </label>
            </div>

            <div className="mb-6">
              <label htmlFor="jenRating">
                Jen rating
                <input
                  type="number"
                  step="0.1"
                  id="jenRating"
                  className="mt-1 shadow-sm block w-full sm:text-sm border-zinc-300 dark:border-zinc-700 dark:bg-zinc-800 rounded-md"
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
                  className="mt-1 shadow-sm block w-full sm:text-sm border-zinc-300 dark:border-zinc-700 dark:bg-zinc-800 rounded-md"
                  {...register('link', { required: true })}
                />
              </label>
            </div>

            <div className="mb-6">
              <label
                htmlFor="image"
                className="mt-1 shadow-sm block w-full p-2 border border-dashed border-zinc-300 dark:border-zinc-700 cursor-pointer rounded-md"
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

export default FoodForm;
