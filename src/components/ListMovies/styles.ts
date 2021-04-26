import styled from 'styled-components';

export const Container = styled.ul`
  padding: 10px 0;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;
  }
`;

export const EmptyMessage = styled.h2`
  text-align: center;
`;
