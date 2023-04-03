import { format } from 'date-fns';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

import { postFilePaths, POSTS_PATH } from '@/mdx/mdxUtils';
import BlogPost from './BlogPost';

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
    <div className="mx-auto mt-40 max-w-screen-sm">
      <div className="mb-16 flex flex-col items-center">
        <h1 className="text-4xl font-bold text-gray-900">Blog</h1>
      </div>

      {/* <p className="mb-16">
    This is my internet library where I keep track of my favorite books.
    Books that I&apos;m currently reading, have already finished, or plan to
    pick up in the future. This list is nowhere near exhaustive, and is
    currently displaying books I&apos;ve found or read since 2021.
  </p> */}

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
    </div>
  );
}
