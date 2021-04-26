import { IMovieParsed } from 'containers/movies/dtos';

export interface IState {
  list: IMovieParsed[];
}

export interface IActions {
  setFavorite(movie: IMovieParsed): void;
  removeFavorite(idMovie: string): void;
  loadFavorites(): void;
}
