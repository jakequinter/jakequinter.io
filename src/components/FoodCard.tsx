import Link from 'next/link';
import { Image } from 'cloudinary-react';
import { motion } from 'framer-motion';
import { ArrowSquareOut } from 'phosphor-react';

type Props = {
  restaurantName: string;
  jakeRating: string;
  jenRating: string;
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
    >
      <Link href={link} passHref>
        <a>
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

          <div className="text-white">
            <h2 className="absolute top-8 left-1/2 -translate-x-1/2 text-center text-xl font-medium">
              {restaurantName}
            </h2>

            <ArrowSquareOut
              className="absolute top-2 right-2 hidden text-gray-50 group-hover:block"
              size="20"
            />

            <div className="absolute top-1/4 left-6 -translate-y-1/4">
              <div className="flex items-center">
                <Image
                  height={35}
                  width={35}
                  src="/jakeAvi.png"
                  alt="Jake avatar"
                />
                <p className="ml-2">{jakeRating}</p>
              </div>
            </div>

            <div className="absolute top-1/4 right-6 -translate-y-1/4">
              <div className="flex items-center">
                <Image
                  height={35}
                  width={35}
                  src="/jenAvi.png"
                  alt="Jen avatar"
                />
                <p className="ml-2">{jenRating}</p>
              </div>
            </div>
          </div>
        </a>
      </Link>
    </motion.div>
  );
}
