import React from 'react';
import { render } from '@testing-library/react';
import AxiosMockAdapter from 'axios-mock-adapter';

import api from 'services/api';

import moviesRequest from '__mocks__/requests/moviesRequest';

import withContainer, { initialState } from 'containers/movies';
import actions from 'containers/movies/actions';
import parserMovies from 'containers/movies/parserMovies';
import mountPages from 'containers/movies/mountPages';

const serviceMock = new AxiosMockAdapter(api);

describe('movies container', () => {
  it('should be render with Component.', () => {
    const MockComponent = () => <p>mock</p>;

    const MakeContainerWrapper = withContainer(MockComponent);
    const { getByText } = render(<MakeContainerWrapper />);

    expect(getByText('mock')).toBeTruthy();
  });

  describe('#actions', () => {
    describe('searchMovies', () => {
      it('should be search movies with success', async () => {
        const changeStateMock = jest.fn();

        serviceMock.onGet(`/`).reply(200, moviesRequest);

        const actionsMock = actions({
          data: { ...initialState, search: 'Batman' },
          changeState: changeStateMock,
        });

        await actionsMock.searchMovies();

        expect(changeStateMock).toHaveBeenCalledWith({
          label: 'loading',
          value: true,
        });
        expect(changeStateMock).toHaveBeenCalledWith({
          label: 'list',
          value: moviesRequest.Search.map(parserMovies),
        });
        expect(changeStateMock).toHaveBeenCalledWith({
          label: 'pagination',
          value: {
            page: 0,
            pages: mountPages(moviesRequest.totalResults),
          },
        });
        expect(changeStateMock).toHaveBeenCalledWith({
          label: 'loading',
          value: false,
        });

        expect(changeStateMock.mock.calls.length).toBe(4);
      });

      it('should be search movies with not found movies', async () => {
        const changeStateMock = jest.fn();

        serviceMock.onGet(`/`).reply(200, { ...moviesRequest, Search: null });

        const actionsMock = actions({
          data: { ...initialState, search: 'Batman' },
          changeState: changeStateMock,
        });

        await actionsMock.searchMovies();

        expect(changeStateMock).toHaveBeenCalledWith({
          label: 'loading',
          value: true,
        });
        expect(changeStateMock).toHaveBeenCalledWith({
          label: 'list',
          value: [],
        });
        expect(changeStateMock).toHaveBeenCalledWith({
          label: 'pagination',
          value: {
            page: 0,
            pages: mountPages(moviesRequest.totalResults),
          },
        });
        expect(changeStateMock).toHaveBeenCalledWith({
          label: 'loading',
          value: false,
        });

        expect(changeStateMock.mock.calls.length).toBe(4);
      });

      it('should be search movies with error', async () => {
        const changeStateMock = jest.fn();

        serviceMock.onGet(`/`).reply(500);

        const actionsMock = actions({
          data: { ...initialState, search: 'Batman' },
          changeState: changeStateMock,
        });

        await actionsMock.searchMovies();

        expect(changeStateMock).toHaveBeenCalledWith({
          label: 'loading',
          value: true,
        });
        expect(changeStateMock).toHaveBeenCalledWith({
          label: 'error',
          value: 'Ocorreu um erro inesperado!',
        });
        expect(changeStateMock).toHaveBeenCalledWith({
          label: 'loading',
          value: false,
        });

        expect(changeStateMock.mock.calls.length).toBe(3);
      });

      it('must search for movies with error in the data, request successfully', async () => {
        const changeStateMock = jest.fn();

        serviceMock.onGet(`/`).reply(200, moviesRequest);

        const actionsMock = actions({
          data: { ...initialState, search: 'Batman', error: 'Teste' },
          changeState: changeStateMock,
        });

        await actionsMock.searchMovies();

        expect(changeStateMock).toHaveBeenCalledWith({
          label: 'loading',
          value: true,
        });
        expect(changeStateMock).toHaveBeenCalledWith({
          label: 'list',
          value: moviesRequest.Search.map(parserMovies),
        });
        expect(changeStateMock).toHaveBeenCalledWith({
          label: 'pagination',
          value: {
            page: 0,
            pages: mountPages(moviesRequest.totalResults),
          },
        });
        expect(changeStateMock).toHaveBeenCalledWith({
          label: 'error',
          value: null,
        });
        expect(changeStateMock).toHaveBeenCalledWith({
          label: 'loading',
          value: false,
        });

        expect(changeStateMock.mock.calls.length).toBe(5);
      });
    });

    describe('setSearch', () => {
      it('should be set search text', async () => {
        const changeStateMock = jest.fn();

        const actionsMock = actions({
          data: initialState,
          changeState: changeStateMock,
        });

        const textSearch = 'Teste';

        await actionsMock.setSearch(textSearch);

        expect(changeStateMock).toHaveBeenCalledWith({
          label: 'search',
          value: textSearch,
        });
        expect(changeStateMock).toHaveBeenCalledWith({
          label: 'pagination',
          value: {
            page: 0,
            pages: 0,
          },
        });

        expect(changeStateMock.mock.calls.length).toBe(2);
      });
    });

    describe('changePage', () => {
      it('should be change page', async () => {
        const changeStateMock = jest.fn();

        const actionsMock = actions({
          data: initialState,
          changeState: changeStateMock,
        });

        const page = 4;

        await actionsMock.changePage(page);

        expect(changeStateMock).toHaveBeenCalledWith({
          label: 'pagination',
          value: {
            page,
            pages: 0,
          },
        });

        expect(changeStateMock.mock.calls.length).toBe(1);
      });
    });
  });
});
