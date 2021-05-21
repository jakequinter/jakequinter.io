import { css } from 'stitches.config';

export const button = css({
  boxSizing: 'border-box',
  appearance: 'none',
  borderRadius: '5px',

  border: '1px solid $border',
  WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
  margin: 0,
  py: '$2',
  px: '$3',
  backgroundColor: '$tint',
  color: '$secondary',
  fontSize: '$3',
  lineHeight: 1,

  '&:hover': {
    // color: '$gray600',
    border: '1px solid $borderhover',
  },

  '&:focus': {
    outline: 'none',
  },

  variants: {
    type: {
      activetab: {
        border: 'none',
        borderBottom: '1px solid $primary',
        px: 0,
        marginRight: '$3',
        fontSize: '$2',
        backgroundColor: 'inherit',
        borderRadius: 0,
        color: '$activenavlink',

        '&:hover': {
          color: '$activenavlink',
          border: 'none',
          borderBottom: '1px solid white',
        },

        '@bp1': {
          marginRight: '$4',
        },
      },
      inactivetab: {
        border: 'none',
        px: 0,
        fontSize: '$2',
        marginRight: '$3',
        backgroundColor: 'inherit',
        borderRadius: 0,
        color: '$unactivenavlink',

        '&:hover': {
          color: '$activenavlink',
          border: 'none',
        },

        '@bp1': {
          marginRight: '$4',
        },
      },
      blog: {
        border: 'none',
        px: 0,
        fontSize: '$3',
        // marginRight: '$3',
        // backgroundColor: 'inherit',
        // borderRadius: 0,
        color: '$unactivenavlink',
        backgroundColor: 'inherit',

        '&:hover': {
          color: '$activenavlink',
          border: 'none',
        },

        // '@bp1': {
        //   marginRight: '$4',
        // },
      },
    },
  },
});
