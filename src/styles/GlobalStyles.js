import { createGlobalStyle } from 'styled-components';
import { COLORS } from './colors';

const { bgColor } = COLORS;

const GlobalStyle = createGlobalStyle`

  body{
    margin:0;
    max-width: 1440px;
    margin-left: auto;
    margin-right: auto;
    padding:0 2rem;
    color: white;
    background-image: url('/images/background-stars.svg');
    background-color: ${bgColor};
    font-family: 'League Spartan', sans-serif;
  }

  h1,
  h2,
  h3{
    font-family: 'Antonio', sans-serif;
  }

  a{
    text-decoration: none;
    color:inherit
  }

  ul{
    list-style: none;
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 0;

  }
`;

export { GlobalStyle };
