import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { container, simpleFlex } from 'styles/mixins';

export const HeaderStyles = styled.header`
  padding: ${({ theme }) => `${theme?.base?.padding * 2}px 0`};
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  margin-bottom: ${({ theme }) => theme?.base?.margin * 5}px;
`;

export const HeaderContainer = styled.div`
  ${container};
  ${simpleFlex};
  flex-direction: column;

  a {
    color: ${({ theme }) => theme?.colors?.white};
    transition: 0.2s color;

    &.active {
      color: ${({ theme }) => theme?.colors?.secondary};
    }
  }

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const LinkStyle = styled(NavLink)`
  &:first-child {
    margin-bottom: ${({ theme }) => theme?.base?.margin * 3}px;
  }

  &:last-child {
    margin-top: ${({ theme }) => theme?.base?.margin * 3}px;
  }

  @media (min-width: 768px) {
    &:first-child {
      margin-bottom: 0;
    }

    &:last-child {
      margin-top: 0;
    }
  }
`;
