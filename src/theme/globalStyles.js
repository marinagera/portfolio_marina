import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: sans-serif;
    transition: all 0.3s ease;
  }
`;

export default GlobalStyle;