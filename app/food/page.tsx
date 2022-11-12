import Food from './FoodList';

async function fetchFood() {
  const response = await fetch(`${process.env.JAKEQUINTERIO_URL}/api/food`);

  return response.json();
}

export default async function FoodHome() {
  const food = await fetchFood();

  return (
    <>
      <div className="space-y-4">
        <h1 className="mb-6 text-2xl font-bold text-gray-900 dark:text-gray-50">
          Food 🍕
        </h1>
        <p>
          My girlfriend and I love food. We love trying new places, cuisines,
          keeping track of what we loved, what we liked, and what we didn&apos;t
          care for. Since moving to Boston, we have been introduced to a new
          realm of restaurants. It&apos;s quite different than what we were
          accustomed to in Appleton, WI. There&apos;s food everywhere here. So,
          we thought it would be cool to keep track of the food we&apos;ve
          tried, give it a rating, and remember it for future reference.
        </p>
      </div>

      <Food data={food} />
    </>
  );
}
