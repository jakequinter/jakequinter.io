import { GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';

import { getFood } from '@/lib/helpers';
import { Food } from '@/types/food';
import Container from '@/components/Container';
import FoodList from '@/components/FoodList';

type Props = {
  food: Food[];
};

export default function FoodHome({ food }: Props) {
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
      <h1 className="text-zinc-900 dark:text-zinc-50 text-5xl mb-8 font-semibold">
        Food 🍕
      </h1>
      <p className="pb-8">
        My girlfriend and I love food. We love trying new places, cuisines,
        keeping track of what we loved, what we liked, and what we didn’t care
        for. Since moving to Boston, we have been introduced to a new realm of
        restaurants. It’s quite different than what we were accustomed to in
        Appleton, WI. There’s food everywhere here. So, we thought it would be
        cool to keep track of the food we’ve tried, give it a rating, and
        remember it for future reference.
      </p>
      <FoodList data={food} />
    </Container>
  );
}

export const getStaticProps: GetStaticProps = async context => {
  const food = await getFood();

  return {
    props: { food },
    revalidate: 60,
  };
};
