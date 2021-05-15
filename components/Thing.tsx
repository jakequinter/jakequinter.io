import React from 'react';
import Link from 'next/link';
import { box } from '@/styles/box';
import { link as stylelink } from '@/styles/link';
import { text } from '@/styles/text';

type Thing = {
  id: string;
  link: string;
  title: string;
  type: string;
  description: string;
};

export default function Thing({ id, link, title, type, description }: Thing) {
  return (
    <div key={id} className={box({ py: '$3' })}>
      <div>
        <Link href={link}>
          <a
            className={stylelink({
              type: 'unactive',
              css: {
                color: '$gray200',
                '&:hover': { color: '$gray300' }
              }
            })}
            target="_blank"
          >
            {title}
          </a>
        </Link>
        <span
          className={text({
            css: {
              display: 'inline-flex',
              marginLeft: '$1',
              alignItems: 'center',
              px: '$2',
              borderRadius: '9999px',
              fontSize: '$1',
              lineHeight: '$2',
              backgroundColor: '$gray500',
              color: '$gray400'
            }
          })}
        >
          {type}
        </span>
      </div>
      <p className={text({ css: { color: '$gray700' } })}>{description}</p>
    </div>
  );
}
