import { GetServerSideProps } from 'next';
import Link from 'next/link';
import { NextSeo } from 'next-seo';

import Container from '@/components/Container';
import Things from '@/components/Things';
import { text } from '@/styles/text';
import { box } from '@/styles/box';
import { link } from '@/styles/link';
import { getAllThings } from '@/lib/db-admin';

export default function Bookmarks({
  allThings,
  personalSites,
  people,
  booksAndPodcasts,
}) {
  return (
    <Container>
      <NextSeo
        title="Jake Quinter 📌"
        canonical="https://jakequinter.io/bookmarks"
        openGraph={{
          url: 'https://jakequinter.io/bookmarks',
          title: 'Jake Quinter 📌',
        }}
      />
      <div className="flex-row justify-between align-center">
        <h1
          className={text({
            size: '7',
            weight: 'medium',
            css: { marginBottom: '$4' },
          })}
        >
          Internet Things
        </h1>
        <div>
          <p className={text({ css: { paddingBottom: '$4' } })}>
            This page is going to be a collection of “internet things” that I
            feel are exceptional and want to save for future reference. These
            "internet things" are going to range from personal websites I
            admire, people who I believe are worth following, books I believe
            are worth reading, podcasts that deserve a listen, blogs worth
            reading, musings, and who knows what else.
          </p>
          <Link href="https://www.amazon.com/Thinking-Fast-Slow-Daniel-Kahneman/dp/0374533555">
            <a className={link()} target="_blank">
              <div
                className={box({
                  border: '1px solid $gray500',
                  marginBottom: '$4',
                  padding: '$3',
                  borderRadius: '5px',
                })}
              >
                <p className={text()}>
                  Currently Reading: Thinking, Fast and Slow by Daniel Kahneman
                </p>
              </div>
            </a>
          </Link>
        </div>
        <Things
          allThings={allThings}
          personalSites={personalSites}
          people={people}
          booksAndPodcasts={booksAndPodcasts}
        />
      </div>
    </Container>
  );
}

export const getServerSideProps: GetServerSideProps = async context => {
  const allThings = await getAllThings();
  const personalSites = allThings.filter(t => t.type === 'site');
  const people = allThings.filter(t => t.type === 'people');
  const booksAndPodcasts = allThings.filter(
    t => t.type === 'book' || t.type === 'podcast'
  );

  return {
    props: { allThings, personalSites, people, booksAndPodcasts },
  };
};
