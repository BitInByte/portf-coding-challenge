import { createGlobalStyle } from 'styled-components';

const globalStyles = createGlobalStyle`
  //     === RESETS === 
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  a:active,
  a:hover {
    outline: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  li {
    display: block;
  }

  button {
    outline: none;
    border: none;
    background-color: transparent;

  }
  
  input {
    outline: none;
    border: none;
  }
  
//  ====== UNIVERSAL PROPERTIES ======
  html {
    font-size: 62.5%; // 1rem = 10px; 10px/16px = 62.5%
  }


  body {
    font-size: 1.6rem;
    box-sizing: border-box;
    // font-family: 'Jura', sans-serif;
    font-weight: normal;
    word-wrap: break-word;
    font-kerning: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

export default globalStyles;
