import { GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';

import Header from '@/components/Header';
import FoodList from '@/components/FoodList';
import { text } from '@/styles/text';
import { box } from '@/styles/box';
import { getAllFood } from '@/lib/db-admin';

export default function Food({ food }) {
  return (
    <div>
      <NextSeo
        title="Jake Quinter 🍕"
        canonical="https://jakequinter.io/food"
        openGraph={{
          url: 'https://jakequinter.io/food',
          title: 'Jake Quinter 🍕',
        }}
      />
      <Header />
      <div className={box({ my: 80, maxWidth: '56rem', mx: 'auto' })}>
        <h1
          className={text({
            size: '7',
            weight: 'medium',
            css: { marginBottom: '$4' },
          })}
        >
          Food 😋
        </h1>
        <div>
          <p className={text({ css: { paddingBottom: '$5' } })}>
            My girlfriend and I love food. We love trying new places, cuisines,
            keeping track of what we loved, what we liked, and what we didn’t
            care for. Since moving to Boston, we have been introduced to a new
            realm of restaurants. It’s quite different than what we were
            accustomed to in Appleton, WI. There’s food everywhere here. So, we
            thought it would be cool to keep track of the food we’ve tried, give
            it a rating, and remember it for future reference.
          </p>
        </div>
        <FoodList data={food} />
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async context => {
  const food = await getAllFood();

  return {
    props: { food },
  };
};
