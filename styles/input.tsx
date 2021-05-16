import { css } from 'stitches.config';

export const input = css({
  boxSizing: 'border-box',
  appearance: 'none',
  border: '1px solid $gray400',
  WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
  marginTop: '$1',
  marginBottom: '$4',
  py: '0',
  px: '$2',
  height: '$4',
  backgroundColor: 'transparent',
  fontSize: '$2',
  lineHeight: 1,
  width: '100%',
  borderRadius: '5px',

  '&:focus': {
    outline: 'none',
    borderColor: '$gray500',
  },
});
