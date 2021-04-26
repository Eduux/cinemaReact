import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      error: string;
      lightGray: string;
      white: string;
      [propName: string]: string;
    };

    base: {
      margin: number;
      padding: number;
      radius: number;
    };
  }
}
