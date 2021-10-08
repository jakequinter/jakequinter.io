import { box } from '@/styles/box';
import { text } from '@/styles/text';
import React from 'react';

export function UL({ ...props }) {
  return (
    <div
      className={box({
        paddingBottom: '$3',
        marginLeft: '$4',
        listStyle: 'inside',
      })}
      {...props}
    />
  );
}
export function LI({ ...props }) {
  return (
    <p
      className={text({ css: { display: 'list-item', paddingBottom: '$3' } })}
      {...props}
    />
  );
}
