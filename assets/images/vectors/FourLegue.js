import React from 'react';
import styled from 'styled-components';

export const FourLeague = () => {
  return (
    <svg width="47" height="54" viewBox="0 0 47 54" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_232_6)">
        <RectStyled x="2" width="52" height="54" rx="4" fill="black" />
        <PathStyled
          d="M22 44.25V33.9L45.6061 0H59.8744V33.15H66V44.25H59.8744V54H47.1002V44.25H22ZM47.9966 14.1L35.4465 33.15H47.9966V14.1Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_232_6">
          <rect width="47" height="54" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const RectStyled = styled.rect`
  fill: ${({ theme }) => theme.primaryColor};
`;

export const PathStyled = styled.path`
  fill: ${({ theme }) => theme.body};
`;
