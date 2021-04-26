/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  render,
  fireEvent,
  getByPlaceholderText,
  act,
  waitFor,
} from '@testing-library/react';
import AxiosMockAdapter from 'axios-mock-adapter';

import api from 'services/api';

import Component from 'components/SearchInput';

import withMovies, { initialState } from 'containers/movies';

import moviesRequest from '__mocks__/requests/moviesRequest';

const serviceMock = new AxiosMockAdapter(api);

jest.mock('react-router-dom', () => ({
  useHistory: () => ({ push: jest.fn() }),
}));

describe('SearchInput component', () => {
  serviceMock.onGet('/').reply(200, moviesRequest);

  it('should render without data', () => {
    const Container: React.FC = withMovies(Component, initialState);

    const result = render(<Container />);

    expect(result).toMatchSnapshot();
  });

  it('should render with data', () => {
    const Container: React.FC = withMovies(Component, initialState);

    const result = render(<Container />);

    expect(result).toMatchSnapshot();
  });

  it('should render witht data and change search text', () => {
    const Container: React.FC = withMovies(Component, {
      ...initialState,
      search: 'Batman',
    });

    const result: any = render(<Container />);
    const { container } = result;

    const input: any = getByPlaceholderText(container, 'Procurar filme:');

    act(() => {
      fireEvent.change(input, { target: { value: 'Superman' } });
    });

    expect(input.value).toBe('Superman');
    expect(result).toMatchSnapshot();
  });

  it('should render witht data and change search text and submit search', () => {
    const Container: React.FC = withMovies(Component);

    const result: any = render(<Container />);
    const { container } = result;

    const input: any = getByPlaceholderText(container, 'Procurar filme:');
    act(() => {
      fireEvent.change(input, { target: { value: 'Superman' } });
      fireEvent.submit(input);
    });

    expect(input.value).toBe('Superman');
    expect(result).toMatchSnapshot();
  });
});
