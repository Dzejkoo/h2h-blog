import React, { useContext } from 'react';
import Header from './Header';
import GlobalStyle from '../assets/style/globalStyle';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '../assets/style/theme';
import { ModeContext } from '../providers/ModeProvider';
import styled from 'styled-components';

const Layout = ({ children }) => {
  const { theme } = useContext(ModeContext);
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyle />
      <Header />
      <WrapperPage>{children}</WrapperPage>
    </ThemeProvider>
  );
};

export const WrapperPage = styled.div`
  max-width: 1250px;
  margin: 0 auto;
  padding: 0 10px;
`;
export default Layout;
