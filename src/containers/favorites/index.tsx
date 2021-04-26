/* eslint-disable react/jsx-props-no-spreading */
import React, {
  useState,
  useCallback,
  useContext,
  memo,
  useEffect,
} from 'react';

import changeState from 'helpers/changeState';
import actions from './actions';

import { IActions, IState } from './dtos';

export const initialState = {
  list: [],
};

interface IData {
  data: IState;
  actions: IActions;
}

export const FavoritesContext = React.createContext<IData>({
  data: initialState,
  actions: actions({ data: initialState, changeState: changeState(() => {}) }),
});

export const useFavorites = (): IData => useContext(FavoritesContext);

export default function withFavoritesProvider(
  WrappedComponent: React.FC,
  state: IState = initialState,
): React.FC {
  const WithFavorites = (props: object) => {
    const [data, setData] = useState(state);

    const value = useCallback(
      () => ({
        data,
        actions: actions({ data, changeState: changeState(setData) }),
      }),
      [data],
    );

    const dataValue: IData = value();

    useEffect(() => {
      dataValue.actions.loadFavorites();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
      <FavoritesContext.Provider value={dataValue}>
        <WrappedComponent {...props} />
      </FavoritesContext.Provider>
    );
  };

  return memo(WithFavorites);
}
