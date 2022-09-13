import FoodCard from '@/components/FoodCard';
import { Food } from '@/types/food';

type Props = {
  data: Food[];
};

export default function FoodList({ data }: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12">
      {data &&
        data.map(food => (
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
  );
}
