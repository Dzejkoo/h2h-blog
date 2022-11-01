import React, { useContext } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { ModeContext } from '../providers/ModeProvider';

const Header = () => {
  const { themeToggler } = useContext(ModeContext);
  return (
    <WrapperHeader>
      <div className="container">
        <div className="logo">
          <Link href="/">
            <span>h2h</span>
          </Link>
        </div>
        <div className="control-panel">
          <Switcher>
            <input type="checkbox" onClick={themeToggler} />
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
  border-bottom: 1px solid black;
  margin-bottom: 30px;
  .container {
    display: flex;
    margin-left: 10px;
    margin-right: 10px;
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
  width: 50px;
  height: 26px;
  @media screen and (max-width: 820px) {
    width: 45px;
    height: 24px;
  }
  position: relative;
  input {
    opacity: 0;
    width: 0;
    height: 0;
    &:checked + span {
      background-color: #fff;
    }
    &:checked + span::before {
      transform: translateX(22px);
      @media screen and (max-width: 820px) {
        transform: translateX(20px);
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
    background-color: #383838;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 30px;
    &::before {
      position: absolute;
      content: '';
      height: 21px;
      width: 21px;
      @media screen and (max-width: 820px) {
        width: 19px;
        height: 19px;
        bottom: 2.3px;
      }
      left: 4px;
      bottom: 2.8px;
      border-radius: 50%;
      background-color: #ccc;
      -webkit-transition: 0.4s;
      transition: 0.4s;
    }
  }
`;
