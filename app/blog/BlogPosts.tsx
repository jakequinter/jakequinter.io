import { format } from 'date-fns';

import BlogPost from './BlogPost';

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

export default function BlogPosts({ posts }: Props) {
  return (
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
  );
}
