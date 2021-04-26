import { IMovieParsed, IMovieNotParsed } from './dtos';

export default ({
  Poster,
  Title,
  Type,
  Year,
  imdbID,
}: IMovieNotParsed): IMovieParsed => ({
  poster: Poster,
  title: Title,
  type: Type,
  year: Year,
  imdbID,
});
