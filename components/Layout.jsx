import React from 'react';
import Header from './Header';
import styled from 'styled-components';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};
export default Layout;
