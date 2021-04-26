import React, { ReactElement } from 'react';

import { Container } from './styles';

interface IProps {
  children: string | ReactElement;
}

const ContentFullHeight: React.FC<IProps> = ({ children }: IProps) => (
  <Container>{children}</Container>
);

export default ContentFullHeight;
