import { useState } from 'react';
import { GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';

import { getFood } from '@/lib/helpers';
import { Food } from '@/types/food';
import Container from '@/components/layout/Container';
import FoodList from '@/components/FoodList';
import Pagination from '@/components/Pagination';

type Props = {
  food: Food[];
};

export default function FoodHome({ food }: Props) {
  const [page, setPage] = useState(1);

  const determineResults = (data: Food[]) => {
    if (page === 1) {
      return data.slice(0, 10);
    }

    return data.slice((page - 1) * 10, page * 10);
  };

  return (
    <Container>
      <NextSeo
        title="Jake Quinter 🍕"
        canonical="https://jakequinter.io/food"
        openGraph={{
          url: 'https://jakequinter.io/food',
          title: 'Jake Quinter 🍕',
        }}
      />

      <div className="space-y-4">
        <h1 className="text-gray-900 dark:text-gray-50 text-2xl font-bold mb-6">
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

      <FoodList data={determineResults(food)} />
      <Pagination page={page} setPage={setPage} data={food} />
    </Container>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const food = await getFood();

  return {
    props: { food },
    revalidate: 60,
  };
};
