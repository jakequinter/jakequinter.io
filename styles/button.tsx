import { css } from 'stitches.config';

export const button = css({
  boxSizing: 'border-box',
  appearance: 'none',
  borderRadius: '5px',

  border: '1px solid $gray300',
  WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
  margin: 0,
  py: '$2',
  px: '$3',
  backgroundColor: '$gray100',
  color: '$gray500',
  fontSize: '$3',
  lineHeight: 1,

  '&:hover': {
    color: '#000',
  },

  '&:focus': {
    outline: 'none',
    bc: '$black',
    color: '$white',
  },

  variants: {
    type: {
      activetab: {
        border: 'none',
        borderBottom: '1px solid white',
        px: 0,
        marginRight: '$2',
        fontSize: '$2',
        backgroundColor: 'inherit',
        borderRadius: 0,
        color: '$gray200',

        '&:hover': {
          color: '$gray200',
        },

        '@bp1': {
          marginRight: '$4',
        },
      },
      inactivetab: {
        border: 'none',
        px: 0,
        fontSize: '$2',
        marginRight: '$2',
        backgroundColor: 'inherit',
        borderRadius: 0,
        color: '$gray400',

        '&:hover': {
          color: '$gray300',
        },

        '@bp1': {
          marginRight: '$4',
        },
      },
    },
  },
});
