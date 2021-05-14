import { css } from '../stitches.config';

export const link = css({
  borderBottom: '1px solid $gray300',
  cursor: 'default',
  textDecoration: 'none',
  color: '$gray400',
  py: '$3',

  // '&:visited': {
  //   color: 'inherit'
  // },

  '&:hover': {
    color: '$gray200'
  },

  variants: {
    type: {
      active: { color: '$gray200', border: 'none' },
      unactive: { border: 'none' }
    }
  }
});
