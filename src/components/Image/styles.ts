import styled from 'styled-components';

export const Container = styled.img`
  max-width: 100%;
  height: ${({ height }) => height};
  width: ${({ width }) => width};
`;
