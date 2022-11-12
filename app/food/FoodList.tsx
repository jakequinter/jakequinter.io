'use client';

import { useState } from 'react';

import { Food } from 'types/food';
import FoodCard from './FoodCard';
import Pagination from 'app/shared/Pagination';

type Props = {
  data: Food[];
};

export default function FoodList({ data }: Props) {
  const [page, setPage] = useState(1);

  const determineResults = (data: Food[]) => {
    if (page === 1) {
      return data.slice(0, 10);
    }

    return data.slice((page - 1) * 10, page * 10);
  };

  return (
    <div>
      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {data &&
          data.length > 0 &&
          determineResults(data).map(food => (
            <FoodCard
              key={food.id}
              restaurantName={food.restaurantName}
              jakeRating={food.jakeRating.toString()}
              jenRating={food.jenRating.toString()}
              link={food.link}
              image={food.image}
            />
          ))}
      </div>
      <Pagination page={page} setPage={setPage} data={data} />
    </div>
  );
}
