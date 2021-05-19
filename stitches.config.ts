import { createCss, StitchesCss } from '@stitches/react';

const stitchesConfig = createCss({
  theme: {
    colors: {
      hiContrast: 'hsl(206,10%,5%)',
      loContrast: 'white',
      
      gray950: '#202020',
      gray900: 'hsl(210, 24%, 16%)',
      gray800: 'hsl(209, 20%, 25%)',
      gray700: 'hsl(209, 18%, 30%)',
      gray600: 'hsl(209, 14%, 37%)',
      gray500: 'hsl(211, 12%, 43%)',
      gray400: 'hsl(211, 10%, 53%)',
      gray300: 'hsl(211, 13%, 65%)',
      gray200: 'hsl(210, 16%, 82%)',
      gray100: 'hsl(214, 15%, 91%)',
      gray50: 'hsl(216, 33%, 97%)',
      
      blue500: '#3B82F6',
      blue600: '#2563EB',

      yellow100: '#FEF3C7',
      yellow400: '#FBBF24',
      yellow700: '#B45309',

      // aliases
      primary: '$gray900',
      secondary: '$gray700',
      tertiary: '$gray100',
      shade: '$gray200',
      tint: '$gray50',
      border: '$gray100',
      borderhover: '$gray200',
      activenavlink: '$gray800',
      unactivenavlink: '$gray500',
      link: '$blue500',
      linkhover: '$blue600',
      nav: '$loContrast'

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

    // aliases
    primary: '$gray100',
    secondary: '$gray300',
    tertiary: '$gray900',
    shade: '$gray800',
    tint: '$gray950',
    border: '$gray800',
    borderhover: '$gray700',
    activenavlink: '$gray300',
    unactivenavlink: '$gray500',
    link: '$gray400',
    linkhover: '$gray300',
    nav: '#121212'

  },
})

export type CSS = StitchesCss<typeof stitchesConfig>;

export const { css, styled, global, getCssString } = stitchesConfig;
