import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }

  *, *::after, *::before {
    box-sizing: border-box;
  }

  body {
    position: relative;
    font-family: "Poppins", sans-serif;
    padding: 0 0 6rem 0;
    min-height: 100%;
  }

  small {
    display: block;
  }

  a {
    color: #343078;
    text-decoration: none;
  }

  a:hover {
    color: #000000;
    text-decoration: none;
  }
`;
