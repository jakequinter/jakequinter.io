import { css } from '../stitches.config';

export const grid = css({
  display: 'grid',
  gridTemplateColumns: 'repeat(1, 1fr)',
  gap: '$4',

  '@bp2': {
    gridTemplateColumns: 'repeat(2, 1fr)'
  }
});
