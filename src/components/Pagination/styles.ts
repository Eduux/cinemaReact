import styled from 'styled-components';
import { simpleFlex } from 'styles/mixins';

export const Container = styled.div`
  margin-top: ${({ theme }) => theme?.base?.margin * 3}px;

  ul {
    ${simpleFlex};
    justify-content: space-between;
    flex-wrap: wrap;

    li {
      cursor: pointer;
      font-weight: bold;

      &.selected {
        color: ${({ theme }) => theme?.colors?.secondary};
        cursor: initial;
      }

      &.disabled {
        cursor: initial;
        opacity: 0.8;
      }

      a {
        display: block;
        padding: ${({ theme }) =>
          `${theme?.base?.padding / 2}px ${theme?.base?.padding}px`};
      }

      &.previous,
      &.next {
        background-color: ${({ theme }) => theme?.colors?.secondary};
        border-radius: ${({ theme }) => theme?.base?.radius}px;
        transition: 0.2s opacity;

        &:hover {
          opacity: 0.8;
        }
      }
    }

    @media (min-width: 1400px) {
      flex-wrap: initial;
    }
  }
`;
