import React, { useState, useEffect } from 'react';
import useSWR from 'swr';

import fetcher from '@/utils/fetcher';
import FoodCard from '@/components/FoodCard';

const FoodList = () => {
  const { data } = useSWR('/api/food', fetcher);

  return (
    <div className="grid gap-4 xs:grid-cols:1 sm:grid-cols-2">
      {data &&
        data.food.map(item => (
          <FoodCard
            key={item.id}
            name={item.name}
            link={item.link}
            description={item.description}
            jakeRating={item.jakeRating}
            jenRating={item.jenRating}
            imageUrl={item.imageUrl}
          />
        ))}
    </div>
  );
};

export default FoodList;
