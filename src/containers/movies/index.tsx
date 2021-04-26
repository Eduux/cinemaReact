/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useCallback, useContext, memo } from 'react';

import changeState from 'helpers/changeState';
import actions from './actions';

import { IState, IActions } from './dtos';

export const initialState = {
  loading: false,
  error: null,
  list: [],
  search: '',
  pagination: {
    page: 0,
    pages: 0,
  },
};

interface IData {
  data: IState;
  actions: IActions;
}

export const MoviesContext = React.createContext<IData>({
  data: initialState,
  actions: actions({ data: initialState, changeState: changeState(() => {}) }),
});

export const useMovies = (): IData => useContext(MoviesContext);

export default function withMoviesProvider(
  WrappedComponent: React.FC,
  state: IState = initialState,
): React.FC {
  const WithMovies = (props: any) => {
    const [data, setData] = useState(state);

    const value = useCallback(
      () => ({
        data,
        actions: actions({ data, changeState: changeState(setData) }),
      }),
      [data],
    );

    const dataValue: IData = value();

    return (
      <MoviesContext.Provider value={dataValue}>
        <WrappedComponent {...props} />
      </MoviesContext.Provider>
    );
  };

  return memo(WithMovies);
}
