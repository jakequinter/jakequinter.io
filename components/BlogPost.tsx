import Link from 'next/link';
import { useTheme } from 'next-themes';

import { box } from '@/styles/box';
import { text } from '@/styles/text';

export default function BlogPost({ title, description, createdAt, slug }) {
  const { theme } = useTheme();

  return (
    <Link href={slug}>
      <div
        className={
          theme === 'dark'
            ? box({
                padding: '$3',
                my: '$3',
                borderRadius: '5px',
                border: '1px solid $gray500',
                '&:hover': { border: '1px solid $gray400' },
              })
            : box({
                padding: '$3',
                my: '$3',
                borderRadius: '5px',
                border: '1px solid $gray500',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                '&:hover': { boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' },
              })
        }
      >
        <div
          className={box({
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'baseline',
          })}
        >
          <h3 className={text({ size: '5', weight: 'medium' })}>{title}</h3>
          <p className={text({ size: '1', css: { color: '$gray400' } })}>
            {createdAt}
          </p>
        </div>
        <p className={text({ css: { color: '$gray700', paddingTop: '$2' } })}>
          {description}
        </p>
      </div>
    </Link>
  );
}
