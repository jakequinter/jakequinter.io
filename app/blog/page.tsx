import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

import { postFilePaths, POSTS_PATH } from 'utils/mdxUtils';
import BlogPosts from './BlogPosts';

const fetchBlogPosts = () => {
  const posts = postFilePaths.map(filePath => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
    const { content, data } = matter(source);

    return {
      content,
      data,
      filePath,
    };
  });

  return { posts };
};
export default function Blog() {
  const { posts } = fetchBlogPosts();

  return (
    <>
      <h1 className="mb-6 text-2xl font-bold text-gray-900 dark:text-gray-50">
        Blog
      </h1>

      <BlogPosts posts={posts} />
    </>
  );
}
