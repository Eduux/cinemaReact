/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactElement } from 'react';
import styled from 'styled-components';

import { simpleFlex } from '../../styles/mixins';

export type TButton = {
  children: string | ReactElement;
  width?: string;
  onClick?: any;
  type?: 'button' | 'submit' | 'reset' | undefined;
};

export const ButtonStyles = styled.button<TButton>`
  ${simpleFlex};
  width: ${({ width }) => width};
  text-transform: uppercase;
  color: ${({ theme }) => theme?.colors?.white};
  background-color: ${({ theme, color }) => color || theme?.colors?.secondary};
  border-radius: ${({ theme }) => theme?.base?.radius}px;
  padding: ${({ theme }) => theme?.base?.padding}px;
  border: 0;
  font-weight: 900;
  transition: 0.2s opacity ease-in, 0.2s transform ease-in;

  &:hover {
    opacity: 0.9;
  }

  &:active {
    transform: scale(0.98);
  }
`;
