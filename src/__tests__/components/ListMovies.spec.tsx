import React from 'react';
import { render } from '@testing-library/react';

import Component from 'components/ListMovies';

describe('ListMovies component', () => {
  const list = [
    {
      imdbID: '1',
      poster: '1',
      title: 'filme',
      type: 'a',
      year: '112',
    },
  ];

  it('should render without data', async () => {
    const result = render(<Component list={[]} />);
    expect(result).toMatchSnapshot();
  });

  it('should render with data', async () => {
    const result = render(<Component list={list} />);
    expect(result).toMatchSnapshot();
  });

  it('should render without data and changing the empty list message', async () => {
    const result = render(<Component list={[]} emptyMessage="Teste" />);
    expect(result).toMatchSnapshot();
  });
});
