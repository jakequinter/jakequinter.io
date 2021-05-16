import FoodCard from '@/components/FoodCard';
import { grid } from '@/styles/grid';

export default function FoodList({ data }) {
  return (
    <div className={grid()}>
      {data &&
        data.map(item => (
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
