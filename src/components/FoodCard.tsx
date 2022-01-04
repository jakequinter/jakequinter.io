import Link from 'next/link';
import { Image } from 'cloudinary-react';

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
    <div className="p-4 border border-gray-400 dark:border-darkgray-400 shadow rounded">
      <div className="text-center">
        <Link href={link}>
          <a className="text-2xl text-blue-500 hover:text-blue-600 dark:text-orange-500 hover:dark:text-orange-600">
            {restaurantName}
          </a>
        </Link>
      </div>
      <div className="flex p-4 justify-between mt-4 mb-2 max-w-sm mx-auto">
        <div className="flex items-center">
          <Image height={35} width={35} src="/jakeAvi.png" alt="Jake avatar" />
          <p className="ml-2">{jakeRating}</p>
        </div>
        <div className="flex items-center">
          <Image height={35} width={35} src="/jenAvi.png" alt="Jen avatar" />
          <p className="ml-2">{jenRating}</p>
        </div>
      </div>
      <Image
        className="object-cover shadow-lg rounded-lg"
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
    </div>
  );
}
