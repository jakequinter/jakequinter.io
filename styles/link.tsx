import { css } from '../stitches.config';

export const link = css({
  borderBottom: '1px solid $link',
  cursor: 'default',
  textDecoration: 'none',
  color: '$link',

  // '&:visited': {
  //   color: 'inherit'
  // },

  '&:hover': {
    color: '$linkhover',
  },

  variants: {
    type: {
      active: {
        color: '$activenavlink',
        border: 'none',
        '&:hover': { color: '$activenavlink' },
      },
      unactive: {
        color: '$unactivenavlink',
        border: 'none',
        '&:hover': { color: '$activenavlink' },
      },
    },
  },
});
