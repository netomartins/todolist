import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    font-family: Arial, sans-serif;
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.text};
    transition: background-color 0.3s ease, color 0.3s ease;
    display: flex;
    flex-direction: column;
  }

  .App {
    display: flex;
    flex-direction: column;
    min-height: 100vh; /* Garante altura mínima da tela inteira */
  }
`;
