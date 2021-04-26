import React from 'react';
import { render } from '@testing-library/react';

import Home from 'pages/Home';

import withMovies, { initialState } from 'containers/movies';

describe('Home page', () => {
  it('should render without data', () => {
    const Container = withMovies(Home, initialState);

    const result = render(<Container />);
    expect(result).toMatchSnapshot();
  });

  it('must render with error', () => {
    const Container = withMovies(Home, {
      ...initialState,
      error: 'Ocorreu um erro inesperado!',
    });

    const result = render(<Container />);
    expect(result).toMatchSnapshot();
  });

  it('must render with data', () => {
    const Container = withMovies(Home, {
      ...initialState,
      list: [
        {
          imdbID: '1',
          poster: 'a',
          title: 'a',
          type: 'a',
          year: '1960',
        },
      ],
    });

    const result = render(<Container />);
    expect(result).toMatchSnapshot();
  });

  it('must render with loading', () => {
    const Container = withMovies(Home, {
      ...initialState,
      loading: true,
    });

    const result = render(<Container />);
    expect(result).toMatchSnapshot();
  });
});
