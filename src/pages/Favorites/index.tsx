import React from 'react';

import { useFavorites } from 'containers/favorites';

import ListMovies from 'components/ListMovies';

import { Container } from './styles';

const Favorites: React.FC = () => {
  const {
    data: { list },
  } = useFavorites();

  return (
    <Container>
      <ListMovies
        list={list}
        emptyMessage="Nenhum filme encontrado na categoria favoritos."
      />
    </Container>
  );
};

export default Favorites;
