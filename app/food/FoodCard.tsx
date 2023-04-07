'use client';

import Link from 'next/link';
import { Image } from 'cloudinary-react';
import { motion } from 'framer-motion';
import { ArrowSquareOut } from 'phosphor-react';

type Props = {
  restaurantName: string;
  jakeRating: number;
  jenRating: number;
  link: string;
  image: string;
};

export default function FoodCard({
  restaurantName,
  jakeRating,
  jenRating,
  link,
  image,
}: Props) {
  return (
    <motion.div
      className="group relative rounded shadow grayscale hover:cursor-pointer hover:grayscale-0"
      whileHover={{ scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 100 }}
    >
      <Link href={link}>
        <Image
          className="rounded-lg object-cover shadow-lg brightness-50"
          cloudName={process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}
          publicId={image}
          alt={restaurantName}
          secure
          dpr="auto"
          quality="auto"
          width={640}
          height={Math.floor((3 / 4) * 640)}
          crop="fill"
          gravity="auto"
        />

        <div>
          <h2 className="absolute top-8 left-1/2 -translate-x-1/2 text-center text-xl font-medium text-white">
            {restaurantName}
          </h2>

          <ArrowSquareOut
            className="absolute top-2 right-2 hidden text-gray-100 group-hover:block"
            size="20"
          />

          <div className="absolute top-1/4 left-6 -translate-y-1/4">
            <div className="flex items-center text-gray-300">
              <Image
                height={35}
                width={35}
                src="/images/jakeAvi.png"
                alt="Jake avatar"
              />
              <p className="ml-2">{jakeRating.toFixed(1)}</p>
            </div>
          </div>

          <div className="absolute top-1/4 right-6 -translate-y-1/4">
            <div className="flex items-center text-gray-300">
              <Image
                height={35}
                width={35}
                src="/images/jenAvi.png"
                alt="Jen avatar"
              />
              <p className="ml-2">{jenRating.toFixed(1)}</p>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
