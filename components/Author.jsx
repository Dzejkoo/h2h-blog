import React from 'react';
import styled from 'styled-components';
import moment from 'moment/moment';
import Calendar from './Calendar';
import Image from 'next/image';
import Link from 'next/link';

const Author = ({ post }) => {
  const {
    createdAt,
    author: {
      name,
      photo: { url }
    }
  } = post;
  return (
    <AuthorWrapper>
      <div className="info">
        <div className="info-img__wrapper">
          <Image layout="fill" objectFit="cover" src={url} alt="author" />
        </div>
        <div className="info__desc">
          <h2>
            <Link href="/authors">{name}</Link>
          </h2>
        </div>
      </div>
      <Calendar createdAt={createdAt} />
    </AuthorWrapper>
  );
};

export const AuthorWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  .info {
    display: flex;
    flex-direction: row;
    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }
    &__desc {
      max-width: 500px;
      h2 {
        margin-left: 10px;
        cursor: pointer;
        font-weight: 300;
        a {
          text-decoration: none;
          color: ${({ theme }) => theme.primaryColor};
        }
        font-size: ${({ theme }) => theme.fontSize.reguralText};
      }
    }
    .info-img__wrapper {
      width: 100%;
      width: 40px;
      height: 40px;
      cursor: pointer;
      position: relative;
    }
  }
`;

export default Author;
