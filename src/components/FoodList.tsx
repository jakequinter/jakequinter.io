import FoodCard from '@/components/FoodCard';
import { Food } from '@/types/food';

type Props = {
  data: Food[];
};

export default function FoodList({ data }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
