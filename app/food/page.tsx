import type { Metadata } from 'next';

import { getFood } from '@/lib/helpers';
import FoodContent from './FoodContent';

export const metadata: Metadata = {
  title: 'Food',
  description: 'A list of food I have tried, liked, or disliked.',
};

async function getFoodData() {
  const food = await getFood();
  return food;
}

export default async function page() {
  const food = await getFoodData();

  return (
    <div>
      <div className="mb-16 flex flex-col items-center">
        <h1 className="text-4xl font-bold text-gray-900">Food 🍕</h1>
      </div>

      <p className="mb-16">
        Although I try to eat healthy ~95% of the time, my girlfriend and I love
        food. We love trying new restaurants, cuisines, keeping track of what we
        loved, what we liked, and what we didn&apos;t care for. Since moving to
        Boston, we have been introduced to a new realm of restaurants. It&apos;s
        quite different than what we were accustomed to in Appleton, WI.
        There&apos;s food everywhere here. So, we thought it would be cool to
        keep track of the food we&apos;ve tried, give it a rating, and remember
        it for future reference.
      </p>

      <FoodContent data={food} />
    </div>
  );
}
