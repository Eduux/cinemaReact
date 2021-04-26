import React from 'react';
import { render } from '@testing-library/react';

import withContainer, { initialState } from 'containers/favorites';
import actions from 'containers/favorites/actions';

describe('favorites container', () => {
  it('should be render with Component.', () => {
    const MockComponent = () => <p>mock</p>;

    const MakeContainerWrapper = withContainer(MockComponent);
    const { getByText } = render(<MakeContainerWrapper />);

    expect(getByText('mock')).toBeTruthy();
  });

  describe('#actions', () => {
    const movieMock = {
      poster: 'a',
      title: 'a',
      type: 'a',
      year: '1970',
      imdbID: '1',
    };

    describe('setFavorite', () => {
      it('should be set favorite', () => {
        const changeStateMock = jest.fn();
        const actionsMock = actions({
          data: initialState,
          changeState: changeStateMock,
        });

        actionsMock.setFavorite(movieMock);

        expect(changeStateMock).toHaveBeenCalledWith({
          label: 'list',
          value: [movieMock],
        });
        expect(changeStateMock.mock.calls.length).toBe(1);
      });
    });

    describe('removeFavorite', () => {
      it('should be remove favorite', () => {
        const changeStateMock = jest.fn();
        const actionsMock = actions({
          data: { ...initialState, list: [movieMock] },
          changeState: changeStateMock,
        });

        actionsMock.removeFavorite(movieMock.imdbID);

        expect(changeStateMock).toHaveBeenCalledWith({
          label: 'list',
          value: [],
        });
        expect(changeStateMock.mock.calls.length).toBe(1);
      });
    });

    describe('loadFavorites', () => {
      it('should be load favorites', () => {
        const changeStateMock = jest.fn();
        const actionsMock = actions({
          data: initialState,
          changeState: changeStateMock,
        });

        actionsMock.loadFavorites();

        expect(changeStateMock).toHaveBeenCalledWith({
          label: 'list',
          value: [],
        });
        expect(changeStateMock.mock.calls.length).toBe(1);
      });
    });
  });
});
