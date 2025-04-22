import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: "Manrope", sans-serif;
    font-weight: 400;
    font-size: 14px;
    transition: all 0.3s ease;
  }
`;

export default GlobalStyle;