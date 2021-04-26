export interface IMovieNotParsed {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
}

export interface IMovieParsed {
  poster: string;
  title: string;
  type: string;
  year: string;
  imdbID: string;
}

export interface IState {
  loading: boolean;
  error: null | string;
  list: IMovieParsed[];
  search: string;
  pagination: {
    page: number;
    pages: number;
  };
}

export interface IActions {
  searchMovies(): void;
  setSearch(search: string): void;
  changePage(page: number): void;
}
