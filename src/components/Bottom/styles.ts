import styled from 'styled-components';

import { container } from 'styles/mixins';

export const BottomStyles = styled.div`
  padding: ${({ theme }) => theme?.base?.padding}px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  margin-top: ${({ theme }) => theme?.base?.margin * 5}px;
`;

export const BottomContainer = styled.div`
  ${container};
  text-align: center;
`;
