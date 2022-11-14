import React, { useContext } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { ModeContext } from '../providers/ModeProvider';
import Image from 'next/image';

const Header = () => {
  const { themeToggler, checked } = useContext(ModeContext);
  return (
    <WrapperHeader>
      <div className="container">
        <div className="logo">
          <Link href="/">
            <span>LOGO</span>
          </Link>
        </div>
        <div className="control-panel">
          <Switcher>
            <input type="checkbox" defaultChecked={checked} onClick={themeToggler} />
            <span></span>
          </Switcher>
        </div>
      </div>
    </WrapperHeader>
  );
};

export default Header;

export const WrapperHeader = styled.div`
  margin: 0 auto;
  width: 100%;
  margin-bottom: 30px;
  position: sticky;
  top: 0;
  z-index: 5;
  background-color: ${({ theme }) => theme.headerBgc};
  .container {
    display: flex;
    margin-left: 10px;
    margin-right: 10px;
    max-width: 1250px;
    margin: 0 auto;
    padding: 0 10px;
    justify-content: space-between;
    .control-panel {
      display: flex;
      align-items: center;
    }
    .logo {
      font-size: 28px;
      padding: 20px 10px;
      cursor: pointer;
    }
    .categories {
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      span {
        padding: 10px 20px;
      }
    }
  }
`;
export const Switcher = styled.label`
  width: 41px;
  height: 22px;
  @media screen and (max-width: 820px) {
    width: 41px;
    height: 22px;
  }
  position: relative;
  input {
    opacity: 0;
    width: 0;
    height: 0;
    &:checked + span {
      background-color: ${({ theme }) => theme.primaryColor};
    }
    &:checked + span::before {
      transform: translateX(17px);
      @media screen and (max-width: 820px) {
        transform: translateX(17px);
      }
    }
  }
  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${({ theme }) => theme.primaryColor};
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 30px;
    &::before {
      position: absolute;
      content: '';
      height: 17px;
      width: 17px;

      left: 4px;
      bottom: 2.8px;
      border-radius: 50%;
      background-color: ${({ theme }) => theme.blockBgc};
      -webkit-transition: 0.4s;
      transition: 0.4s;
    }
  }
`;
