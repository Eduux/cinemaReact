import api from 'services/api';

import { IDataChangeState } from 'helpers/changeState';

import parserMovies from './parserMovies';
import mountPages from './mountPages';

import { IActions, IState, IMovieNotParsed } from './dtos';

interface IData {
  data: IState;
  changeState(data: IDataChangeState): void;
}

interface IMoviesResponde {
  Search?: IMovieNotParsed[];
  totalResults: string;
}

export default ({ data, changeState }: IData): IActions => ({
  searchMovies: async () => {
    const { error, pagination, search } = data;

    changeState({ label: 'loading', value: true });

    try {
      const response: IMoviesResponde = await api.get('', {
        params: { s: search, page: pagination.page + 1 },
      });

      changeState({
        label: 'list',
        value: response.Search ? response.Search.map(parserMovies) : [],
      });
      changeState({
        label: 'pagination',
        value: {
          ...pagination,
          pages: mountPages(response.totalResults),
        },
      });

      if (error) changeState({ label: 'error', value: null });
    } catch (err) {
      changeState({ label: 'error', value: 'Ocorreu um erro inesperado!' });
    } finally {
      changeState({ label: 'loading', value: false });
    }
  },

  setSearch: search => {
    const { pagination } = data;

    changeState({ label: 'search', value: search });

    changeState({
      label: 'pagination',
      value: {
        ...pagination,
        page: 0,
      },
    });
  },

  changePage: page => {
    const { pagination } = data;

    changeState({
      label: 'pagination',
      value: {
        ...pagination,
        page,
      },
    });
  },
});
