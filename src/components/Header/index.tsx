import React from 'react';

import SearchInput from 'components/SearchInput';

import { HeaderStyles, HeaderContainer, LinkStyle } from './styles';

const Header: React.FC = () => (
  <HeaderStyles>
    <HeaderContainer>
      <LinkStyle to="/" exact>
        Home
      </LinkStyle>

      <SearchInput />

      <LinkStyle to="/favorites" exact>
        Favoritos
      </LinkStyle>
    </HeaderContainer>
  </HeaderStyles>
);

export default Header;
