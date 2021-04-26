import React from 'react';

import { ButtonStyles, TButton } from './styles';

const Button: React.FC<TButton> = ({
  children,
  width,
  onClick,
  type,
}: TButton) => (
  <ButtonStyles width={width} onClick={onClick} type={type}>
    {children}
  </ButtonStyles>
);

Button.defaultProps = {
  type: 'submit',
};

export default Button;
