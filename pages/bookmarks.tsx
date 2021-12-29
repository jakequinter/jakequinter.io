import { GetStaticProps } from 'next';
import Link from 'next/link';
import { NextSeo } from 'next-seo';

// import { getAllThings } from '@/lib/db-admin';
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
        <h1 className="text-gray-900 dark:text-darkgray-900 text-5xl mb-8 font-semibold">
          Bookmarks
        </h1>
        <div>
          <p className="pb-8">
            This page is going to be a collection of “internet things” that I
            feel are exceptional and want to save for future reference. These
            "internet things" are going to range from personal websites I
            admire, people who I believe are worth following, books I believe
            are worth reading, podcasts that deserve a listen, blogs worth
            reading, musings, and who knows what else.
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
  const personalSites = bookmarks.filter(t => t.type === 'site');
  const people = bookmarks.filter(t => t.type === 'people');
  const booksAndPodcasts = bookmarks.filter(
    t => t.type === 'book' || t.type === 'podcast'
  );

  return {
    props: { bookmarks, personalSites, people, booksAndPodcasts },
    revalidate: 60,
  };
};
