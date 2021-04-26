import React from 'react';

import { useMovies } from 'containers/movies';

import ListMovies from 'components/ListMovies';
import ErrorMessage from 'components/ErrorMessage';
import Loader from 'components/Loader';
import Pagination from 'components/Pagination';

import { Container } from './styles';

const Home: React.FC = () => {
  const {
    data: { list, loading, error, pagination },
    actions: { changePage },
  } = useMovies();

  return error ? (
    <Container>
      <ErrorMessage>{error}</ErrorMessage>
    </Container>
  ) : (
    <Container>
      {loading ? (
        <Loader />
      ) : (
        <>
          <ListMovies list={list} />
          <Pagination
            page={pagination.page}
            pages={pagination.pages}
            onChange={changePage}
          />
        </>
      )}
    </Container>
  );
};

export default Home;
