import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
${reset}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: 'Spoqa Han Sans Neo', 'Spoqa Han Sans JP', 'sans-serif';
}
img {
  max-width: 100%;
  max-height: 100%;
}

a {
  color: inherit;
  text-decoration: inherit;
}

button {
  border: none;
  background: none;
  cursor: pointer;
}
`;
export default GlobalStyle;
