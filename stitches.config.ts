import { createCss, StitchesCss } from '@stitches/react';

const stitchesConfig = createCss({
  theme: {
    colors: {
      hiContrast: 'hsl(206,10%,5%)',
      loContrast: 'white',

      gray600: '#FAFBFC',
      gray500: '#EAEAEA',
      gray400: '#9F9F9F',
      gray300: '#8B8B8B',
      gray200: '#393939',
      gray100: '#404040',

      yellow100: '#FEF3C7',
      yellow400: '#FBBF24',
      yellow700: '#B45309'

    },
    fonts: {
      system: 'system-ui',
    },
    fontSizes: {
      1: '12px',
      2: '14px',
      3: '16px',
      4: '20px',
      5: '24px',
      6: '32px',
      7: '48px',
      8: '64px',
      9: '72px',
    },
    space: {
      1: '4px',
      2: '8px',
      3: '16px',
      4: '32px',
      5: '64px',
      6: '128px',
      7: '256px',
      8: '512px',
    },
    sizes: {
      1: '4px',
      2: '8px',
      3: '16px',
      4: '32px',
      5: '64px',
      6: '128px',
      7: '256px',
      8: '512px',
    },
    lineHeights: {
      1: '18px',
      2: '21px',
      3: '24px',
      4: '30px',
      5: '36px',
      6: '48px',
      7: '72px',
      8: '96px',
      9: '108px',
    },
    radii: {
      1: '2px',
      2: '4px',
      3: '8px',
      round: '9999px',
    },
  },
  media: {
    bp1: '(min-width: 575px)',
    bp2: '(min-width: 750px)',
    bp3: '(min-width: 1000px)',
    bp4: '(min-width: 1200px)',
    dark: '(prefers-color-scheme: dark)',
  },
  utils: {
    mx: config => value => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: config => value => ({
      marginTop: value,
      marginBottom: value,
    }),
    px: config => value => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: config => value => ({
      paddingTop: value,
      paddingBottom: value,
    }),
  },
});

export const darkTheme = stitchesConfig.theme({
  colors: {
    gray100: '#FAFBFC',
    gray200: '#EAEAEA',
    gray300: '#9F9F9F',
    gray400: '#8B8B8B',
    gray500: '#393939',
    gray600: '#404040',

  }
})

export type CSS = StitchesCss<typeof stitchesConfig>;

export const { css, styled, global, getCssString } = stitchesConfig;
