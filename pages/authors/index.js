import React from 'react';
import { getAuthors } from '../../services';
import styled from 'styled-components';
import Router from 'next/router';
import Image from 'next/image';
import { ArrowBack } from '../../assets/images/vectors/ArrowBack';

const authors = ({ author }) => {
  console.log(author);
  return (
    <AuthorsWrapper>
      <div className="button-back">
        <a onClick={() => Router.back()}>
          <ArrowBack />
          wróć
        </a>
      </div>
      {author.map((single, index) => (
        <div key={index} className="container-author">
          <div className="auhtor__img-wrapper">
            <Image src={single.photo.url} priority layout="fill" objectFit="cover" alt="author" />
          </div>
          <div className="author__desc">
            <h2>{single.name}</h2>
            <p>{single.bio}</p>
          </div>
        </div>
      ))}
    </AuthorsWrapper>
  );
};

export const AuthorsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  .author__desc {
    margin-left: 20px;
    @media screen and (max-width: 920px) {
      margin-left: 0;
      margin-top: 20px;
    }
    h2 {
      margin-top: 10px;
      margin-bottom: 15px;
      font-size: ${({ theme }) => theme.fontSize.h2};
    }
    p {
      font-weight: 300;
      font-size: ${({ theme }) => theme.fontSize.reguralText};
    }
  }
  .container-author {
    width: 100%;
    box-sizing: border-box;
    max-width: 920px;
    display: flex;
    flex-direction: row;
    align-self: center;
    justify-content: flex-start;
    margin-top: 40px;
    background-color: ${({ theme }) => theme.blockBgc};
    border-radius: 10px;
    padding: 20px;
    @media screen and (max-width: 920px) {
      flex-direction: column;
      padding: 10px;
      max-width: 300px;
    }

    .auhtor__img-wrapper {
      max-width: 200px;
      width: 50%;
      @media screen and (max-width: 920px) {
        width: 100%;
        max-width: 500px;
      }
      position: relative;
      aspect-ratio: auto 1 / 1;
      position: relative;
      img {
        border-radius: 10px;
        width: 200px;
      }
    }
  }
  .button-back {
    display: flex;
    padding: 10px 10px 10px 0;
    align-items: center;
    justify-content: flex-start;
    a {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: ${({ theme }) => theme.fontSize.reguralText};
      text-transform: uppercase;
      font-weight: 600;
      letter-spacing: 2px;
      line-height: 100%;
      cursor: pointer;
      color: ${({ theme }) => theme.primaryColor};
    }
    svg {
      width: 20px;
      height: 20px;
      margin-right: 10px;
      path {
        stroke: ${({ theme }) => theme.primaryColor};
      }
      transform: rotate(90deg);
    }
  }
`;

export default authors;

export async function getStaticProps() {
  const author = await getAuthors();
  return {
    props: { author }
  };
}
