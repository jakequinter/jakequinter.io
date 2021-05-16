import { css } from '../stitches.config';

export const link = css({
  borderBottom: '1px solid $gray300',
  cursor: 'default',
  textDecoration: 'none',
  color: '$gray400',

  // '&:visited': {
  //   color: 'inherit'
  // },

  '&:hover': {
    color: '$gray300',
  },

  variants: {
    type: {
      active: {
        color: '$gray200',
        border: 'none',
        '&:hover': { color: '$gray200' },
      },
      unactive: { border: 'none' },
    },
  },
});
