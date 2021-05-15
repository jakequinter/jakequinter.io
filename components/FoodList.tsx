import useSWR from 'swr';

import fetcher from '@/utils/fetcher';
import FoodCard from '@/components/FoodCard';
import { grid } from '@/styles/grid';

export default function FoodList() {
  const { data } = useSWR('/api/food', fetcher);

  return (
    <div className={grid()}>
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
}
