import { GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { format } from 'date-fns';

import Container from '@/components/Container';
import BlogPost from '@/components/BlogPost';
import { postFilePaths, POSTS_PATH } from '@/utils/mdxUtils';
import { text } from '@/styles/text';
import { box } from '@/styles/box';

export default function Blog({ posts }) {
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
        {posts.map(post => {
          // fix date-fns issue assuming timezone
          const date = new Date(post.data.publishedAt);
          const formattedDate = new Date(
            date.valueOf() + date.getTimezoneOffset() * 60 * 1000
          );
          return (
            <li key={post.filePath}>
              <BlogPost
                title={post.data.title}
                description={post.data.description}
                publishedAt={format(formattedDate, 'PP')}
                slug={`/blog/${post.data.slug}`}
              />
            </li>
          );
        })}
      </ul>
    </Container>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = postFilePaths.map(filePath => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
    const { content, data } = matter(source);

    return {
      content,
      data,
      filePath,
    };
  });

  return { props: { posts } };
};
