import React from 'react';
import styled from 'styled-components';

export const Loader = () => {
  return (
    <LoaderContainer>
      <div className="spinner">
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="46" />
        </svg>
      </div>
      <h1 className="title">ładowanie...</h1>
    </LoaderContainer>
  );
};

export const LoaderContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);

  .title {
    display: flex;
    justify-content: center;
    color: ${({ theme }) => theme.primaryColor};
  }

  .spinner {
    display: flex;
    justify-content: center;
  }

  svg {
    width: 50%;
    max-width: 10rem;
    animation: rotate 3.6s linear infinite;
  }

  circle {
    fill: none;
    stroke: ${({ theme }) => theme.primaryColor};
    stroke-width: 8px;
    stroke-dasharray: 300;
    animation: outline 2s cubic-bezier(0.77, 0, 0.18, 1) infinite;
  }

  @keyframes outline {
    0% {
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dashoffset: 300;
    }
    100% {
      stroke-dashoffset: 600;
    }
  }

  @keyframes rotate {
    from {
      transform: rotate(0turn);
    }
    to {
      transform: rotate(-1turn);
    }
  }
`;
