import React from 'react';
import styled from 'styled-components';

export const ArrowBack = () => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <PathStyled d="M6 9L12 15L18 9" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

export const PathStyled = styled.path`
  stroke: ${({ theme }) => theme.text};
`;
