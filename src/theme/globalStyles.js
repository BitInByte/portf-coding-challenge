import { createGlobalStyle } from 'styled-components';

const globalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,200;0,400;0,700;1,200;1,400;1,700&display=swap');

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

    @media only screen and (max-width: 37.5em) {
        font-size: 50%;
    }
    }


  body {
    font-size: 1.6rem;
    line-height: 1.5;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    font-weight: normal;
    word-wrap: break-word;
    font-kerning: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

// === DESIGN ===
    input {
        //margin: 1rem;
        padding: 1rem;
        border: 1px solid rgba(0, 0, 0, .2);
        border-radius: 1rem;
    }

h1 {
font-size: 3.5rem;
}
h2 {
font-size: 2.5rem;
}

h3 {
font-size: 2.0rem;
}
`;

export default globalStyles;
