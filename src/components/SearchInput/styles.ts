import styled from 'styled-components';

import { simpleFlex } from 'styles/mixins';

export const Container = styled.div`
  ${simpleFlex};
  max-width: 100%;
  width: 370px;
  margin: 0 auto;
`;

export const InputStyles = styled.input`
  flex: 1;
  height: 50px;
  background: transparent;
  border: 0;
  padding-left: 10px;
  color: ${({ theme }) => theme?.colors?.white};
  font-size: 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.6);
`;

export const FormContainer = styled.form`
  ${simpleFlex};
  width: 100%;
`;

export const WrapperButton = styled.div`
  margin-left: 20px;
`;
