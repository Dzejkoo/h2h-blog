import React from 'react';
import moment from 'moment/moment';
import Link from 'next/link';
import styled from 'styled-components';
import Image from 'next/image';
import Author from './Author';
import { fonSize } from '../assets/style/globalStyle';

const PostCard = ({ post }) => {
  console.log(post);
  return (
    <PostCardStyled>
      <div className="wrapper-image">
        <Image
          priority
          layout="fill"
          objectFit="cover"
          src={post.featuredImage.url}
          alt={post.title}
          className="post-image"
        />
      </div>
      <h1>
        <Link href={`/post/${post.slug}`}>{post.title}</Link>
      </h1>
      <div className="blog-desc__wrapper">
        <div className="blog-desc">
          <p>{post.excerpt}</p>
        </div>
        <Author post={post} />
      </div>
    </PostCardStyled>
  );
};

export const PostCardStyled = styled.div`
  padding: 20px;
  max-width: 920px;
  margin-right: 20px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.blockBgc};
  margin-bottom: 40px;
  h1 {
    font-size: ${({ theme }) => theme.fontSize.h1};
    a {
      color: ${({ theme }) => theme.text};
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  @media screen and (max-width: 920px) {
    margin-right: 0;
    padding: 10px;
  }
  .blog-desc__wrapper {
    width: 100%;
    .blog-desc {
      p {
        font-size: ${({ theme }) => theme.fontSize.h3};
        font-weight: 300;
        line-height: 120%;
      }
    }
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
    aspect-ratio: auto 2 / 1;
    position: relative;
    border-radius: 10px;
    img {
      width: 100%;
      border-radius: 10px;
    }
  }
`;

export default PostCard;
