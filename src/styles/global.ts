import styled, { createGlobalStyle } from 'styled-components';

import { container } from './mixins';

export const Container = styled.div`
  ${container};
  margin-top: 50px;
`;

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    text-decoration: none;
    outline-color:  ${({ theme }) => theme?.colors?.secondary};
  }

  html, body, #root {
    height: 100%;
  }

  button {
    cursor: pointer;
  }

  body {
    -webkit-font-smoothing: antialiased !important;
    text-rendering: optimizeLegibility !important;
    font-family: 'Montserrat', sans-serif;
    background-color: ${({ theme }) => theme?.colors?.primary};
    color: #fff;
  }

  img {
    max-width: 100%;
  }

  ul {
    list-style: none;
  }
`;
