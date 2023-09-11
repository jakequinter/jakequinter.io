'use client';

import { useState } from 'react';

import { Food } from '@/types/food';
import FoodCard from './FoodCard';
import Pagination from '../bookshelf/Pagination';

type Props = {
  data: Food[];
};

export default function FoodContent({ data }: Props) {
  const [page, setPage] = useState(1);

  const determineResults = () => {
    if (page === 1) {
      return data.slice(0, 10);
    }

    return data.slice((page - 1) * 10, page * 10);
  };

  return (
    <>
      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {data &&
          determineResults().map(food => (
            <FoodCard
              key={food.id}
              restaurantName={food.restaurantName}
              jakeRating={food.jakeRating}
              jenRating={food.jenRating}
              link={food.link}
              image={food.image}
            />
          ))}
      </div>
      <Pagination data={data} page={page} setPage={setPage} />
    </>
  );
}
