import React from 'react';
import moment from 'moment/moment';
import Link from 'next/link';
import styled from 'styled-components';

const PostCard = ({ post }) => {
  return (
    <PostCardStyled>
      <div className="wrapper-image">
        <img src={post.featuredImage.url} alt={post.title} className="post-image" />
      </div>
      <h1>
        <Link href={`/post/${post.slug}`}>{post.title}</Link>
      </h1>
      <div className="blog-desc__wrapper">
        <div className="blog-desc">
          <p>{post.excerpt}</p>
        </div>
        <div className="basic-info">
          <div className="img-wrapper">
            <img alt={post.author.name} src={post.author.photo.url}></img>
            <p>{post.author.name}</p>
          </div>
          <div className="calendar">
            <svg
              width="26"
              height="24"
              viewBox="0 0 26 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <rect
                x="4.38776"
                y="5"
                width="16.5452"
                height="16"
                rx="2"
                stroke="black"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16.7967 3V7"
                stroke="black"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.52412 3V7"
                stroke="black"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4.38776 11H20.933"
                stroke="black"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <rect
                x="8.52411"
                y="15"
                width="2.06816"
                height="2"
                stroke="black"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>{moment(post.createdAt).format('MMM DD, YYYY')}</span>
          </div>
        </div>
      </div>
    </PostCardStyled>
  );
};

export const PostCardStyled = styled.div`
  padding: 20px;
  max-width: 920px;
  background-color: #d9d9d9;
  margin-bottom: 40px;
  .blog-desc__wrapper {
    width: 100%;
    .basic-info {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .calendar {
        display: flex;
        align-items: center;
      }
      .img-wrapper {
        display: flex;
        align-items: center;
        img {
          border-radius: 50%;
          width: 50px;
          height: 50px;
        }
      }
    }
  }
  .wrapper-image {
    width: 100%;
    max-width: 943px;
    img {
      width: 100%;
    }
  }
`;

export default PostCard;
