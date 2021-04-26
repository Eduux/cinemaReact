import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from './variables';

interface ITheme {
  children: string | React.ReactElement;
}

const Theme: React.FC<ITheme> = ({ children }: ITheme) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
