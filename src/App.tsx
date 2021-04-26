import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Theme from 'components/Theme';
import Header from 'components/Header';
import Bottom from 'components/Bottom';

import withContainers from 'containers';

import GlobalStyle from 'styles/global';

import Routes from 'routes';

const App: React.FC = () => (
  <Theme>
    <BrowserRouter>
      <GlobalStyle />
      <Header />

      <Routes />

      <Bottom />
    </BrowserRouter>
  </Theme>
);

export default withContainers(App);
