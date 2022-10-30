import React, { useContext } from 'react';
import Header from './Header';
import GlobalStyle from '../assets/style/globalStyle';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '../assets/style/theme';
import { ModeContext } from '../providers/ModeProvider';

const Layout = ({ children }) => {
  const { theme } = useContext(ModeContext);
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  return (
    <>
      <ThemeProvider theme={themeMode}>
        <GlobalStyle />
        <Header />
        {children}
      </ThemeProvider>
    </>
  );
};
export default Layout;
