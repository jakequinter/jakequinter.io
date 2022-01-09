import Link from 'next/link';

type Props = {
  description: string;
  publishedAt: string;
  slug: string;
  title: string;
};

export default function BlogPost({
  description,
  publishedAt,
  slug,
  title,
}: Props) {
  return (
    <Link href={slug} passHref>
      <div className="h-40 p-4 border border-zinc-200 hover:border-zinc-300 dark:border-zinc-700 dark:hover:border-zinc-600 shadow rounded cursor-pointer">
        <span className="flex justify-between items-baseline">
          <h1 className="text-zinc-900 dark:text-zinc-50 text-2xl mb-4 font-semibold">
            {title}
          </h1>
          <p className="text-zinc-400 dark:text-zinc-600 text-xs">
            {publishedAt}
          </p>
        </span>
        <p>{description}</p>
      </div>
    </Link>
  );
}
