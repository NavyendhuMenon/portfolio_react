// src/styles/GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: 'Poppins', sans-serif;
    transition: all 0.3s ease;
    margin: 0;
    padding: 0;
  }

  h1, h2, h3, h4, h5, h6, p{
    font-family: 'IBM Plex Mono', monospace;
  }

  .fancy-text {
    font-family: 'Tektur', cursive;
  }

  * {
    box-sizing: border-box;
  }

  /* Poppins Font Weights */
  .poppins-thin { font-weight: 100; }
  .poppins-extralight { font-weight: 200; }
  .poppins-light { font-weight: 300; }
  .poppins-regular { font-weight: 400; }
  .poppins-medium { font-weight: 500; }
  .poppins-semibold { font-weight: 600; }
  .poppins-bold { font-weight: 700; }
  .poppins-extrabold { font-weight: 800; }
  .poppins-black { font-weight: 900; }

  /* Poppins Italic Variants */
  .poppins-thin-italic { font-weight: 100; font-style: italic; }
  .poppins-extralight-italic { font-weight: 200; font-style: italic; }
  .poppins-light-italic { font-weight: 300; font-style: italic; }
  .poppins-regular-italic { font-weight: 400; font-style: italic; }
  .poppins-medium-italic { font-weight: 500; font-style: italic; }
  .poppins-semibold-italic { font-weight: 600; font-style: italic; }
  .poppins-bold-italic { font-weight: 700; font-style: italic; }
  .poppins-extrabold-italic { font-weight: 800; font-style: italic; }
  .poppins-black-italic { font-weight: 900; font-style: italic; }
`;
