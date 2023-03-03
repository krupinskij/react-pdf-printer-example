import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      primary: string;
      secondary: string;
      background: {
        shadow: string;
      };
      border: {
        shadow: string;
      };
      font: {
        primary: string;
        secondary: string;
      };
    };
    font: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
    };
    lineHeight: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
  }
}
