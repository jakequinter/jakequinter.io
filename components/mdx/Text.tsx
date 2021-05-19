import { box } from '@/styles/box';
import { text } from '@/styles/text';
import React from 'react';

export function P({ ...props }) {
  return <p className={text({ css: { paddingBottom: '$3' } })} {...props} />;
}

export function Code({ ...props }) {
  return (
    <code
      className={text({
        weight: 'bold',
        css: {
          backgroundColor: '$tint',
          padding: '1px',
          color: '$primary',
          borderRadius: '$2',
        },
      })}
      {...props}
    />
  );
}
