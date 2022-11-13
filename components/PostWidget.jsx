import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { getRecentPosts, getSimilarPosts } from '../services';
import styled from 'styled-components';
import Calendar from './Calendar';
import Image from 'next/image';

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) => {
        setRelatedPosts(result);
      });
    } else {
      getRecentPosts().then((result) => {
        setRelatedPosts(result);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);

  return (
    <PostWidgetWrapper>
      <h2>
        <span>{slug ? 'Powiązane' : 'Ostatnie'}</span>
      </h2>
      <div className="group-related-post__wrapper">
        {relatedPosts.map((post, index) => (
          <div key={index} className="single-related-post__wrapper">
            <div className="single-related-post__img-wrapper">
              <Image
                layout="fill"
                objectFit="cover"
                priority={true}
                src={post.featuredImage.url}
                alt={post.title}
              />
            </div>
            <p>
              <Link href={`/post/${post.slug}`}>{post.title}</Link>
            </p>
            <Calendar createdAt={post.createdAt} />
          </div>
        ))}
      </div>
    </PostWidgetWrapper>
  );
};

export const PostWidgetWrapper = styled.div`
  h2 {
    margin-top: 10px;
    position: relative;
    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 1px;
      bottom: 0;
      left: 0;
      z-index: 0;
      background-color: ${({ theme }) => theme.border};
    }
    margin-bottom: 30px;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    span {
      display: block;
      line-height: 100%;
      padding-bottom: 20px;
      z-index: 1;
      text-transform: uppercase;
      border-bottom: 1px solid ${({ theme }) => theme.text};
      font-size: ${({ theme }) => theme.fontSize.smallText};
      letter-spacing: 1px;
    }
  }
  width: 100%;
  .group-related-post__wrapper {
    @media screen and (max-width: 920px) {
      display: flex;
      flex-direction: row;
    }
    @media screen and (max-width: 570px) {
      flex-direction: column;
    }
  }
  .single-related-post__wrapper {
    margin-bottom: 20px;
    box-sizing: border-box;
    padding: 10px;
    max-width: 260px;
    border-radius: 10px;
    p {
      font-weight: 400;
      a {
        color: ${({ theme }) => theme.text};
        text-decoration: none;
        line-height: 120%;
        font-size: 14px;
        &:hover {
          text-decoration: underline;
        }
      }
    }
    @media screen and (max-width: 920px) {
      max-width: 50%;
      &.single-related-post__wrapper:first-child {
        margin-right: 20px;
      }
    }
    @media screen and (max-width: 570px) {
      &.single-related-post__wrapper:first-child {
        margin-right: 0;
      }
      max-width: 100%;
    }
    background-color: ${({ theme }) => theme.blockBgc};
    .single-related-post__img-wrapper {
      width: 100%;
      aspect-ratio: auto 2 / 1;
      position: relative;
      img {
        border-radius: 10px;
      }
    }
  }
`;
export default PostWidget;
