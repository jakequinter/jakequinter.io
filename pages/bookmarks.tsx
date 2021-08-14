import { GetStaticProps } from 'next';
import Link from 'next/link';
import { NextSeo } from 'next-seo';

import Container from '@/components/Container';
import Things from '@/components/Things';
import { text } from '@/styles/text';
import { box } from '@/styles/box';
import { link } from '@/styles/link';
import { getAllThings } from '@/lib/db-admin';
import { grid } from '@/styles/grid';

export default function Bookmarks({
  allThings,
  personalSites,
  people,
  booksAndPodcasts
}) {
  return (
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
        <h1
          className={text({
            size: '7',
            weight: 'bold',
            css: { marginBottom: '$4', marginTop: '$6' }
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

          <h3
            className={text({
              size: '3',
              weight: 'medium',
              css: {
                textAlign: 'center',
                paddingBottom: '$2',
                color: '$primary'
              }
            })}
          >
            Currently reading 📚
          </h3>
          <div
            className={grid({
              rows: '3',
              css: { gap: '$2', marginBottom: '$5' }
            })}
          >
            <Link href="https://www.amazon.com/Skin-Game-Hidden-Asymmetries-Daily/dp/042528462X">
              <a
                className={link({
                  type: 'unactive'
                })}
                target="_blank"
              >
                <div
                  className={box({
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    border: '1px solid $border',
                    padding: '$3',
                    borderRadius: '5px',
                    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
                    '@bp2': {
                      flexDirection: 'column',
                      alignItems: 'start'
                    },
                    '&:hover': {
                      borderColor: '$borderhover'
                    }
                  })}
                >
                  <p className={text()}>Skin in the Game</p>
                  <p
                    className={text({
                      size: '2',
                      css: { color: '$shade', paddingTop: '$2' }
                    })}
                  >
                    Nassim Nicholas Taleb
                  </p>
                </div>
              </a>
            </Link>
            <Link href="https://www.amazon.com/Thinking-Systems-Donella-H-Meadows/dp/1603580557">
              <a
                className={link({
                  type: 'unactive'
                })}
                target="_blank"
              >
                <div
                  className={box({
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    border: '1px solid $border',
                    padding: '$3',
                    borderRadius: '5px',
                    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
                    '@bp2': {
                      flexDirection: 'column',
                      alignItems: 'start'
                    },
                    '&:hover': {
                      borderColor: '$borderhover'
                    }
                  })}
                >
                  <div>
                    <p className={text()}>Thinking in Systems</p>
                  </div>
                  <div>
                    <p
                      className={text({
                        size: '2',
                        css: { color: '$shade', paddingTop: '$2' }
                      })}
                    >
                      Donella Meadows
                    </p>
                  </div>
                </div>
              </a>
            </Link>
            <Link href="https://www.amazon.com/Lean-Startup-Entrepreneurs-Continuous-Innovation/dp/0307887898">
              <a
                className={link({
                  type: 'unactive'
                })}
                target="_blank"
              >
                <div
                  className={box({
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    border: '1px solid $border',
                    padding: '$3',
                    borderRadius: '5px',
                    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
                    '@bp2': {
                      flexDirection: 'column',
                      alignItems: 'start'
                    },
                    '&:hover': {
                      borderColor: '$borderhover'
                    }
                  })}
                >
                  <p className={text()}>The Lean Startup</p>
                  <p
                    className={text({
                      size: '2',
                      css: { color: '$shade', paddingTop: '$2' }
                    })}
                  >
                    Eric Ries
                  </p>
                </div>
              </a>
            </Link>
          </div>
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

export const getStaticProps: GetStaticProps = async context => {
  const allThings = await getAllThings();
  const personalSites = allThings.filter(t => t.type === 'site');
  const people = allThings.filter(t => t.type === 'people');
  const booksAndPodcasts = allThings.filter(
    t => t.type === 'book' || t.type === 'podcast'
  );

  return {
    props: { allThings, personalSites, people, booksAndPodcasts }
  };
};
