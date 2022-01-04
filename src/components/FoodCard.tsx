import Link from 'next/link';
import Image from 'next/image';

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
    <div className="p-4 border border-gray-400 shadow rounded">
      <div className="text-center">
        <Link href={link}>
          <a className="text-2xl text-blue-500" target="_blank">
            {restaurantName}
          </a>
        </Link>
      </div>
      <div className="flex p-4 justify-between mt-4 mb-2">
        <div className="flex items-center">
          <Image height={35} width={35} src="/jakeAvi.png" alt="Jake avatar" />
          <p className="ml-2 text-gray-900">{jakeRating}</p>
        </div>
        <div className="flex items-center">
          <Image height={35} width={35} src="/jenAvi.png" alt="Jen avatar" />
          <p className="ml-2 text-gray-900">{jenRating}</p>
        </div>
      </div>
      <Image
        className="rounded"
        src={image}
        alt={restaurantName}
        height={373}
        width={280}
        priority
      />
    </div>
  );
}
