import React from 'react';

import { IMovieParsed } from 'containers/movies/dtos';

import ListItem from './partials/ListItem';

import { Container, EmptyMessage } from './styles';

interface IProps {
  list: IMovieParsed[];
  emptyMessage?: string;
}

const ListMovies: React.FC<IProps> = ({ list, emptyMessage }: IProps) =>
  list.length ? (
    <Container>
      {list.map(({ title, poster, type, year, imdbID }) => (
        <ListItem
          key={imdbID}
          title={title}
          poster={poster}
          type={type}
          year={year}
          imdbID={imdbID}
        />
      ))}
    </Container>
  ) : (
    <EmptyMessage>{emptyMessage}</EmptyMessage>
  );

ListMovies.defaultProps = {
  emptyMessage: 'Nenhum filme encontrado ou pesquisado.',
};

export default ListMovies;
