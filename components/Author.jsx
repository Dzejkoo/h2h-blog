import React from 'react';
import styled from 'styled-components';
import moment from 'moment/moment';
import Calendar from './Calendar';

const Author = ({ post }) => {
  const {
    createdAt,
    author: {
      name,
      bio,
      photo: { url }
    }
  } = post;
  return (
    <AuthorWrapper>
      <div className="info">
        <img src={url} alt="author" />
        <div className="info__desc">
          <h2>{name}</h2>
          <p>{bio}</p>
        </div>
      </div>
      <Calendar createdAt={createdAt} />
    </AuthorWrapper>
  );
};

export const AuthorWrapper = styled.div`
  display: flex;
  justify-content: space-between;
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
    }
  }
`;

export default Author;
