import React from 'react';
import { render, fireEvent, getByText, act } from '@testing-library/react';

import Component from 'components/ListMovies/partials/ListItem';

import withFavorites, { initialState } from 'containers/favorites';

describe('ListItem component', () => {
  const mockMovie = {
    imdbID: '1',
    poster: '1',
    title: 'filme',
    type: 'a',
    year: '112',
  };

  it('should render', async () => {
    const Container: React.FC = withFavorites(Component.bind(null, mockMovie));

    const result = render(<Container />);
    expect(result).toMatchSnapshot();
  });

  it('must be clicked on the favorite button', () => {
    const Container: React.FC = withFavorites(
      Component.bind(null, mockMovie),
      initialState,
    );

    const result: any = render(<Container />);
    const { container } = result;

    act(() => {
      fireEvent(
        getByText(container, 'Favoritar'),
        new MouseEvent('click', {
          bubbles: true,
          cancelable: true,
        }),
      );
    });

    expect(result).toMatchSnapshot();
  });

  it('must be clicked on the unfavorite button', () => {
    const Container: React.FC = withFavorites(Component.bind(null, mockMovie), {
      list: [mockMovie],
    });

    const result: any = render(<Container />);
    const { container } = result;

    act(() => {
      fireEvent(
        getByText(container, 'Desfavoritar'),
        new MouseEvent('click', {
          bubbles: true,
          cancelable: true,
        }),
      );
    });

    expect(result).toMatchSnapshot();
  });
});
