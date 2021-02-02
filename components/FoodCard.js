import Link from 'next/link';
import Image from 'next/image';

const FoodCard = ({
  name,
  link,
  description,
  jakeRating,
  jenRating,
  imageUrl
}) => {
  return (
    <div className="bg-white p-8 rounded">
      <div className="text-center">
        <Link href={link}>
          <a target="_blank" className="text-xl text-blue-500">
            {name}
          </a>
        </Link>
        <div className="py-8 grid gap-4 grid-cols-2">
          <div>
            <img
              className="inline-block h-12 w-12 mr-2 rounded-full"
              src="/jakeAvi.jpg"
              alt=""
            />
            <h5 className="text-gray-900 text-lg inline">{jakeRating}</h5>
          </div>
          <div>
            <img
              className="inline-block h-12 w-12 mr-2 rounded-full"
              src="/jen.jpg"
              alt=""
            />
            <h5 className="text-gray-900 text-lg inline">{jenRating}</h5>
          </div>
        </div>
      </div>
      {/* <p className="pb-8">{description}</p> */}
      <div className="my-auto">
        <Image
          className="rounded-lg"
          src={imageUrl}
          alt="Jake Quinter"
          height={2000}
          width={1500}
        />
      </div>
    </div>
  );
};

export default FoodCard;
