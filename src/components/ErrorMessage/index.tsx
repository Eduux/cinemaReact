import React, { ReactElement } from 'react';

import { Container } from './styles';

interface IProps {
  children: ReactElement | string;
}

const ErrorMessage: React.FC<IProps> = ({ children }: IProps) => (
  <Container>{children}</Container>
);

export default ErrorMessage;
