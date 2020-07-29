import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

* , *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline-color: rgba(255,255,255,0);
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
}
* {
  scrollbar-width: thin;
  scrollbar-color: #ffb300 white;
}
*::-webkit-scrollbar {
  margin: 10px;
  width: 12px;
  height: 12px;
}
*::-webkit-scrollbar-track {
  margin: 25px;
}
*::-webkit-scrollbar-thumb {
  background-color: #ffb300;
  border-radius: 20px;
  border: 3px solid #ffb300;
}
`
export default GlobalStyle;
