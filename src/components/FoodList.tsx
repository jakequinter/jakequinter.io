import FoodCard from '@/components/FoodCard';
import { Food } from '@/types/food';

import { grid } from '@/styles/grid';

type Props = {
  data: Food[];
};

export default function FoodList({ data }: Props) {
  return (
    <div className={grid()}>
      {data &&
        data.map(item => (
          <FoodCard
            key={item.id}
            name={item.name}
            link={item.link}
            jakeRating={item.jakeRating}
            jenRating={item.jenRating}
            imageUrl={item.imageUrl}
          />
        ))}
    </div>
  );
}
