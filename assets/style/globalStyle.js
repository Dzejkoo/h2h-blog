import { createGlobalStyle } from 'styled-components';

export const lightTheme = {
  body: '#fff',
  text: '#000'
};

const GlobalStyle = createGlobalStyle`
    body{
        margin: 0; 
        padding: 0;
    }
`;

export default GlobalStyle;
