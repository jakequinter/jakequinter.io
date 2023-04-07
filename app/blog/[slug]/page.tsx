import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { format } from 'date-fns';
import { serialize } from 'next-mdx-remote/serialize';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import readingTime from 'reading-time';

import { postFilePaths, POSTS_PATH } from '@/mdx/mdxUtils';
import MDX from './MDX';

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata | undefined> {
  const { data } = matter(
    fs.readFileSync(path.join(POSTS_PATH, `${params.slug}.mdx`))
  );

  return {
    title: `${data.title}`,
    description: data.description,
  };
}

export async function generateStaticParams() {
  const paths = postFilePaths
    // Remove file extensions for page paths
    .map(path => path.replace(/\.mdx?$/, ''))
    // Map the path into the static paths object required by Next.js
    .map(slug => slug);

  return paths.map(slug => {
    slug;
  });
}

async function getBlogPost(slug: string) {
  const postFilePath = path.join(POSTS_PATH, `${slug}.mdx`);
  try {
    const source = fs.readFileSync(postFilePath);
    const { content, data } = matter(source);

    const mdxSource = await serialize(content, {
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
  } catch (error) {
    return null;
  }
}

export default async function Post({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const post = await getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const { source, frontMatter, readingTime } = post;

  const date = new Date(frontMatter.publishedAt);
  const formattedDate = new Date(
    date.valueOf() + date.getTimezoneOffset() * 60 * 1000
  );

  return (
    <>
      <div className="mb-16 flex flex-col items-center">
        <h1 className="text-4xl font-bold text-gray-900">
          {frontMatter.title}
        </h1>
        <p className="text-xs text-gray-500">
          {format(formattedDate, 'PP')} • {readingTime.text}
        </p>
      </div>

      <main className="mb-8">
        <MDX source={source} />
      </main>
    </>
  );
}
