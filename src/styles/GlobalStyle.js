import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

* , *::before, *::after {
    box-sizing: border-box;
}
  html {
    font-size: 62.5%;
  }
  body {    
    margin: 0;
    padding: 0;
    font-family: 'Nunito', sans-serif;
    font-size: 1.6rem;
    text-align: center;
		flex-direction: row;
    justify-content: center;
    align-items: center;
}
`;
export default GlobalStyle;
