import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import Button from 'components/Button';

import { useMovies } from 'containers/movies';

import { Container, InputStyles, FormContainer, WrapperButton } from './styles';

const SearchInput: React.FC = () => {
  const {
    data: { search, pagination },
    actions: { searchMovies, setSearch },
  } = useMovies();
  const history = useHistory();

  const [searchInput, setSearchInput] = useState('');

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e?.preventDefault();
    history.push('');

    await setSearch(searchInput);
  };

  useEffect(() => {
    searchMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pagination.page, search]);

  return (
    <Container>
      <FormContainer onSubmit={handleSubmit}>
        <InputStyles
          value={searchInput}
          onChange={({ target: { value } }) => setSearchInput(value)}
          name="search"
          placeholder="Procurar filme:"
          autoFocus
        />

        <WrapperButton>
          <Button width="90px">Buscar</Button>
        </WrapperButton>
      </FormContainer>
    </Container>
  );
};

export default SearchInput;
