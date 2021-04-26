import styled from 'styled-components';

export const Container = styled.h2`
  color: ${({ theme }) => theme?.colors?.error};
  text-align: center;
`;
