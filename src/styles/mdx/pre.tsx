import { css } from 'stitches.config';

export const pre = css({
  textAlign: 'left',
  margin: '1em 0',
  padding: '0.5em',
  overflow: 'none',
  fontSize: '$2',
  width: '100%',
  borderRadius: '5px',
  overflowX: 'scroll',
  '@bp1': { overflowX: 'hidden' },
});
