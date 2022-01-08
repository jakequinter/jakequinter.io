import { GetStaticProps } from 'next';
import { format } from 'date-fns';
import { NextSeo } from 'next-seo';

import { Posts } from '@/types/notion';
import { getNotionDatabase } from '@/lib/helpers';
import BlogPost from '@/components/BlogPost';
import Container from '@/components/Container';

import { box } from '@/styles/box';
import { text } from '@/styles/text';

type Props = {
  posts: Posts;
};

export default function Blog({ posts }: Props) {
  return (
    <Container>
      <NextSeo
        title="Jake Quinter ✍️"
        canonical="https://jakequinter.io/blog"
        openGraph={{
          url: 'https://jakequinter.io/blog',
          title: 'Jake Quinter ✍️',
        }}
      />
      <h1
        className={text({
          size: '7',
          weight: 'bold',
          css: { marginTop: '$6', marginBottom: '$4' },
        })}
      >
        Blog
      </h1>

      <ul className={box({ listStyle: 'none', padding: 0 })}>
        {posts.results &&
          posts.results.map(post => {
            const date = new Date(post.properties.created_at.date.start);
            const formattedDate = new Date(
              date.valueOf() + date.getTimezoneOffset() * 60 * 1000
            );
            return (
              <li key={post.id}>
                <BlogPost
                  title={post.properties.title.title[0].plain_text}
                  description={
                    post.properties.description.rich_text[0].plain_text
                  }
                  publishedAt={format(formattedDate, 'PP')}
                  slug={`/blog/${post.id}`}
                />
              </li>
            );
          })}
      </ul>
    </Container>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getNotionDatabase();

  return { props: { posts } };
};
