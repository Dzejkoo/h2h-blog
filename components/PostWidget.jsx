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
      <h2>{slug ? 'Powiązane posty' : 'Ostatnie posty'}</h2>
      <div className="group-related-post__wrapper">
        {relatedPosts.map((post, index) => (
          <div key={index} className="single-related-post__wrapper">
            <div className="single-related-post__img-wrapper">
              <Image
                layout="fill"
                objectFit="cover"
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
    margin-top: 0;
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
    background-color: #d9d9d9;
    .single-related-post__img-wrapper {
      width: 100%;
      aspect-ratio: auto 2 / 1;
      position: relative;
    }
  }
`;
export default PostWidget;
