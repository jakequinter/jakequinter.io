import type { Metadata } from 'next';
import { format } from 'date-fns';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

import { postFilePaths, POSTS_PATH } from '@/mdx/mdxUtils';
import BlogPost from './BlogPost';

export const metadata: Metadata = {
  title: 'Jake Quinter | Blog',
  description: 'Read some of my thoughts and ideas.',
};

async function getBlogPosts() {
  const posts = postFilePaths.map(filePath => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
    const { content, data } = matter(source);

    return {
      content,
      data,
      filePath,
    };
  });

  return posts;
}

export default async function Blog() {
  const posts = await getBlogPosts();

  return (
    <>
      <div className="mb-16 flex flex-col items-center">
        <h1 className="text-4xl font-bold text-gray-900">Blog</h1>
      </div>

      <ul className="space-y-4">
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
    </>
  );
}
