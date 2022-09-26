import React from 'react';
// import moment from 'momnet';
import Link from 'next/link';
import styled from 'styled-components';

const PostCard = ({ post }) => {
  console.log(post);
  return (
    <PostCardStyled>
      <div className="wrapper-image">
        <img src={post.featuredImage.url} alt={post.title} className="post-image" />
      </div>
    </PostCardStyled>
  );
};

export const PostCardStyled = styled.div``;

export default PostCard;
