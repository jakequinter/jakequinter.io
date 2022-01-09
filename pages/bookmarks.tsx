import { GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';

import { getBookmarks } from '@/lib/helpers';
import { Thing } from '@/types/thing';
import Container from '@/components/Container';
import Things from '@/components/Things';

type Props = {
  bookmarks: Thing[];
  personalSites: Thing[];
  people: Thing[];
  booksAndPodcasts: Thing[];
};

export default function Bookmarks({
  bookmarks,
  personalSites,
  people,
  booksAndPodcasts,
}: Props) {
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
        <h1 className="text-zinc-900 dark:text-zinc-50 text-5xl mb-8 font-semibold">
          Bookmarks
        </h1>
        <div>
          <p>
            This page is a collection of "internet things" that I feel are
            exceptional and want to save for future reference. These "internet
            things" are going to range from personal websites I admire, people
            who I believe are worth following, books I think are worth reading,
            podcasts that deserve a listen, blogs worth reading, musings, and
            who knows what else.
          </p>
        </div>
        <Things
          allThings={bookmarks}
          personalSites={personalSites}
          people={people}
          booksAndPodcasts={booksAndPodcasts}
        />
      </div>
    </Container>
  );
}

export const getStaticProps: GetStaticProps = async context => {
  const bookmarks = await getBookmarks();
  const personalSites = bookmarks.filter(b => b.type === 'site');
  const people = bookmarks.filter(b => b.type === 'people');
  const booksAndPodcasts = bookmarks.filter(
    b => b.type === 'book' || b.type === 'podcast'
  );

  return {
    props: { bookmarks, personalSites, people, booksAndPodcasts },
    revalidate: 60,
  };
};
