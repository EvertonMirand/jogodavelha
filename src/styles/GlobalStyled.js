import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html, body, #root {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
  }

  body {
    font-family: sans-serif;
    background-color: ${({ theme }) => theme?.background || '#fff'};
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
