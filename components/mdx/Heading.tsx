import { text } from '@/styles/text';
import React from 'react';

export function H1({ ...props }) {
  return (
    <h1
      className={text({
        size: '7',
        weight: 'bold',
      })}
      {...props}
    />
  );
}

export function H2({ ...props }) {
  return (
    <h1
      className={text({
        size: '6',
        weight: 'bold',
        css: { py: '$3' },
      })}
      {...props}
    />
  );
}

export function H3({ ...props }) {
  return (
    <h1
      className={text({
        size: '5',
        weight: 'bold',
      })}
      {...props}
    />
  );
}
