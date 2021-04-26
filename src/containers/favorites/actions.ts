import { IDataChangeState } from 'helpers/changeState';

import { IMovieParsed } from 'containers/movies/dtos';
import * as storage from 'helpers/storage';
import { IActions, IState } from './dtos';

interface IData {
  data: IState;
  changeState(data: IDataChangeState): void;
}

const keyStorage = 'favorites';

export default ({ data: { list }, changeState }: IData): IActions => ({
  setFavorite: (movie: IMovieParsed) => {
    const newMovies = [movie, ...list];
    changeState({ label: 'list', value: newMovies });

    storage.setItem(keyStorage, newMovies);
  },
  removeFavorite: (idMovie: string) => {
    const newMovies = list.filter(({ imdbID }) => imdbID !== idMovie);
    changeState({ label: 'list', value: newMovies });

    storage.setItem(keyStorage, newMovies);
  },
  loadFavorites: () => {
    const favorites = storage.getItem(keyStorage) || [];
    changeState({ label: 'list', value: favorites });
  },
});
