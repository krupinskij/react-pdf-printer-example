import { DefaultTheme } from 'styled-components';

const palette = {
  color: {
    primary: '#D4213D  ',
    secondary: '#c61f26  ',
    background: {
      shadow: '#eee',
    },
    border: {
      shadow: '#eee',
    },
    font: {
      primary: 'black',
      secondary: '#818181',
    },
  },
  font: {
    xs: '0.5rem',
    sm: '0.75rem',
    md: '1rem',
    lg: '1.25rem',
    xl: '2rem',
    xxl: '3rem',
  },
  lineHeight: {
    xs: '0.75rem',
    sm: '1rem',
    md: '1.25rem',
    lg: '1.5rem',
    xl: '2.5rem',
  },
};

export const theme: DefaultTheme = {
  ...palette,
  btn: {
    bg: {
      contained: `linear-gradient(12deg, ${palette.color.secondary} 0%, ${palette.color.primary} 100%)`,
      outlined: '#fff',
    },
    border: {
      contained: 'none',
      outlined: `1px solid ${palette.color.font.secondary}`,
    },
    color: {
      contained: '#fff',
      outlined: palette.color.font.primary,
    },
  },
};
