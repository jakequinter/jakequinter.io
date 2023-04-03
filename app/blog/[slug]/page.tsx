import { format } from 'date-fns';

import { serialize } from 'next-mdx-remote/serialize';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import readingTime from 'reading-time';

import { postFilePaths, POSTS_PATH } from '@/mdx/mdxUtils';
import MDX from './MDX';

export async function generateStaticParams() {
  const paths = postFilePaths
    // Remove file extensions for page paths
    .map(path => path.replace(/\.mdx?$/, ''))
    // Map the path into the static paths object required by Next.js
    .map(slug => ({ params: { slug } }));

  return paths;
}

async function getBlogPost(slug: string) {
  const postFilePath = path.join(POSTS_PATH, `${slug}.mdx`);
  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  });

  return {
    source: mdxSource,
    frontMatter: data,
    readingTime: readingTime(content),
  };
}

export default async function Post({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const { source, frontMatter, readingTime } = await getBlogPost(slug);

  const date = new Date(frontMatter.publishedAt);
  const formattedDate = new Date(
    date.valueOf() + date.getTimezoneOffset() * 60 * 1000
  );

  return (
    <>
      <div className="mx-auto max-w-screen-sm px-4 md:px-0">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-50">
            {frontMatter.title}
          </h1>
          <p className="text-xs text-gray-500 dark:text-gray-800">
            {format(formattedDate, 'PP')} • {readingTime.text}
          </p>
        </div>
        <main className="mb-8">
          <MDX source={source} />
        </main>
      </div>
    </>
  );
}
