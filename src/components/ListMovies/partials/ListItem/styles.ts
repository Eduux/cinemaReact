import styled from 'styled-components';

import { simpleFlex } from 'styles/mixins';

export const Container = styled.li`
  ${simpleFlex};
  flex-direction: column;

  padding: ${({ theme }) => theme?.base?.padding}px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: ${({ theme }) => theme?.base?.radius * 2}px;
  transition: 0.2s box-shadow;

  & + & {
    margin-top: ${({ theme }) => theme?.base?.margin}px;
  }

  &:hover {
    box-shadow: 0px 0px 10px;
  }

  @media (min-width: 768px) {
    & + & {
      margin-top: 0;
    }
  }
`;

export const WrapperContent = styled.div`
  ${simpleFlex};
  flex-direction: column;
  flex: 1;
  margin-top: ${({ theme }) => theme?.base?.margin}px;
`;

export const WrapperImage = styled.div`
  ${simpleFlex};
  justify-content: center;
  width: 100%;

  img {
    height: 400px;
  }
`;

export const ValueText = styled.strong`
  text-align: center;
`;

export const ButtonWrapper = styled.div`
  margin-top: ${({ theme }) => theme?.base?.margin * 2}px;
`;
