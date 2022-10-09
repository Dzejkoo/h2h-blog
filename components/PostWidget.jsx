import React, { useEffect, useState } from 'react';
import moment from 'moment/moment';
import Link from 'next/link';
import { getRecentPosts, getSimilarPosts } from '../services';
import styled from 'styled-components';

const PostWidget = ({ categories, slug }) => {
  const [realtedPosts, setRealtedPosts] = useState([]);
  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) => setRealtedPosts(result));
    } else {
      getRecentPosts().then((result) => setRealtedPosts(result));
    }
  }, [slug]);
  console.log(realtedPosts);
  return (
    <PostWidgetWrapper>
      <h2>Ostatnie posty</h2>
      {realtedPosts.map((post) => (
        <div key={post.name} className="single-related-post">
          <div className="single-related-post__wrapper">
            <img src={post.featuredImage.url} alt={post.title} />
            <p>
              <Link href={`/post/${post.slug}`}>{post.title}</Link>
            </p>
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
      ))}
    </PostWidgetWrapper>
  );
};

export const PostWidgetWrapper = styled.div`
  h2 {
    margin-top: 0;
  }
  max-width: 260px;
  .single-related-post {
    margin-bottom: 20px;
    padding: 10px;
    background-color: #d9d9d9;
    .single-related-post__wrapper {
      img {
        width: 100%;
      }
    }
  }
`;
export default PostWidget;
