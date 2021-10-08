import Link from 'next/link';
import { useTheme } from 'next-themes';

import { box } from '@/styles/box';
import { text } from '@/styles/text';

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
    <Link href={slug}>
      <div
        className={box({
          padding: '$3',
          my: '$3',
          borderRadius: '5px',
          border: '1px solid $border',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
          '&:hover': { border: '1px solid $borderhover' },
        })}
      >
        <div
          className={box({
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'baseline',
          })}
        >
          <h3 className={text({ size: '5', weight: 'medium' })}>{title}</h3>
          <p className={text({ size: '2', css: { color: '$secondary' } })}>
            {publishedAt}
          </p>
        </div>
        <p className={text({ css: { color: '$secondary', paddingTop: '$2' } })}>
          {description}
        </p>
      </div>
    </Link>
  );
}
