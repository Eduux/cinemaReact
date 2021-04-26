import React from 'react';
import { render } from '@testing-library/react';

import Component from 'components/Header';

import withMovies from 'containers/movies';

const Container = withMovies(Component);

jest.mock('react-router-dom', () => ({
  useHistory: jest.fn(),
  NavLink: ({ children }: { children: React.ReactNode }) => children,
}));

describe('Header component', () => {
  it('should render', () => {
    const result = render(<Container />);
    expect(result).toMatchSnapshot();
  });
});
