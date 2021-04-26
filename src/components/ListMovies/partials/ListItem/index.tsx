import React from 'react';

import { IMovieParsed } from 'containers/movies/dtos';

import Image from 'components/Image';
import Button from 'components/Button';

import { useFavorites } from 'containers/favorites';

import {
  Container,
  WrapperContent,
  WrapperImage,
  ValueText,
  ButtonWrapper,
} from './styles';

const ListItem: React.FC<IMovieParsed> = (data: IMovieParsed) => {
  const {
    data: { list },
    actions: { setFavorite, removeFavorite },
  } = useFavorites();

  const { title, poster, type, year, imdbID } = data;

  const isFavorite = list.findIndex(item => item.imdbID === imdbID) !== -1;

  return (
    <Container>
      <WrapperImage>
        <Image src={poster} alt={title} />
      </WrapperImage>

      <WrapperContent>
        <ValueText>{title}</ValueText>

        <ValueText>{type}</ValueText>

        <ValueText>{year}</ValueText>

        <ButtonWrapper>
          <Button
            onClick={
              isFavorite
                ? () => removeFavorite(imdbID)
                : () => setFavorite(data)
            }
          >
            {isFavorite ? 'Desfavoritar' : 'Favoritar'}
          </Button>
        </ButtonWrapper>
      </WrapperContent>
    </Container>
  );
};

export default ListItem;
