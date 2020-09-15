import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }

  *, *::after, *::before {
    box-sizing: border-box;
  }

  body {
    font-family: "Poppins", sans-serif;
  }

  small {
    display: block;
  }

  a {
    color: #343078;
    text-decoration: none;
  }
`;
