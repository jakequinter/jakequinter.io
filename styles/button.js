import { styled } from '../stitches.config';

export const Button = styled('button', {
  appearance: 'none',
  border: 'none',
  height: '50px',
  borderRadius: '5px',
  fontSize: '$2',
  fontWeight: 'bold',
  px: '20px',
  background: '$gray500',
  color: '$gray300',
  marginTop: 24,

  '&:hover': {
    background: '$gray600'
  },

  variants: {
    variant: {
      light: {
        background: '$gray300',

        '&:hvoer': {
          bacground: '$gray400'
        }
      }
    }
  }
});
