import React from 'react';
import { getAuthors } from '../../services';
import styled from 'styled-components';
import Router from 'next/router';
import Image from 'next/image';

const authors = ({ author }) => {
  console.log(author);
  return (
    <AuthorsWrapper>
      <div className="button-back">
        <a onClick={() => Router.back()}>
          <svg
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M34.3259 0.195313C33.8963 0.371095 32.4802 1.74805 22.3338 11.8848C13.0369 21.1719 10.7713 23.4863 10.5857 23.877C10.4099 24.2383 10.3513 24.5312 10.3513 25C10.3513 26.2891 9.62867 25.4883 22.2947 38.1445C33.2615 49.1113 33.7595 49.5996 34.3064 49.7949C35.0193 50.0586 35.5857 50.0586 36.2986 49.7852C36.7673 49.6191 37.0506 49.3945 37.9978 48.4473C39.4041 47.0508 39.5896 46.7187 39.5994 45.6543C39.5994 45.0879 39.5506 44.7656 39.4138 44.4824C39.2869 44.2187 36.1619 41.0156 29.697 34.541L20.1658 25L29.7068 15.4492C34.9509 10.2051 39.3162 5.75195 39.4138 5.56641C39.5017 5.38086 39.5994 4.91211 39.6287 4.53125C39.697 3.45703 39.4334 2.96875 38.0076 1.55274C37.0506 0.60547 36.7673 0.390626 36.2986 0.214845C35.6052 -0.0488272 34.9705 -0.0488272 34.3259 0.195313Z"
              fill="black"
            />
          </svg>
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
  .author__desc {
    margin-left: 20px;
    h2 {
      margin-top: 10px;
      margin-bottom: 15px;
      font-size: ${({ theme }) => theme.fontSize.h2};
    }
  }
  .container-author {
    width: 100%;
    box-sizing: border-box;
    max-width: 920px;
    display: flex;
    flex-direction: row;
    margin-top: 40px;
    background-color: #d9d9d9;
    border-radius: 10px;
    padding: 20px;

    .auhtor__img-wrapper {
      max-width: 200px;
      width: 50%;
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
    a {
      display: flex;
      font-size: ${({ theme }) => theme.fontSize.reguralText};
      text-transform: uppercase;
      font-weight: 600;
      letter-spacing: 2px;
      line-height: 100%;
      cursor: pointer;
    }
    svg {
      padding-right: 10px;
      width: 15px;
      height: 15px;
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
