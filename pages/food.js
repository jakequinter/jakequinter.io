import Link from 'next/link';
import { NextSeo } from 'next-seo';

import Container from '@/components/Container';
import FoodList from '@/components/FoodList';

const Food = () => (
  <Container>
    <NextSeo
      title="Jake Quinter 📌"
      canonical="https://jakequinter.io/bookmarks"
      openGraph={{
        url: 'https://jakequinter.io/bookmarks',
        title: 'Jake Quinter 📌'
      }}
    />
    <div className="flex-row justify-between align-center">
      <h1 className="text-4xl text-gray-900 font-bold pb-4">Food</h1>
      <div>
        <p className="pb-16">
          My girlfriend and I love food. We love trying new places, cuisines,
          keeping track of what we loved, what we liked, and what we didn’t care
          for. Since moving to Boston, we have been introduced to a new realm of
          restaurants. It’s quite different than what we were accustomed to in
          Appleton, WI. There’s food everywhere here. So, we thought it would be
          cool to keep track of the food we’ve tried, give it a rating, and
          remember it for future reference.
        </p>
      </div>
      <FoodList />
    </div>
  </Container>
);

export default Food;
