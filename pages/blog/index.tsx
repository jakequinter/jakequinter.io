import { GetStaticProps } from 'next';
import { format } from 'date-fns';
import { NextSeo } from 'next-seo';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

import { postFilePaths, POSTS_PATH } from '@/utils/mdxUtils';
import BlogPost from '@/components/BlogPost';
import Container from '@/components/Container';

type Props = {
  posts: Post[];
};

type Post = {
  content: string;
  data: PostData;
  filePath: string;
};

type PostData = {
  description: string;
  publishedAt: string;
  slug: string;
  title: string;
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
      <h1 className="text-zinc-900 dark:text-zinc-50 text-5xl mb-8 font-semibold">
        Blog
      </h1>

      <ul className="grid grid-cols-2">
        {posts.map(post => {
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
