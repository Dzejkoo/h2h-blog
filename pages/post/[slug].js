import React from 'react';
import { getPosts, getPostDetails } from '../../services';
import {
  PostDetail,
  Categories,
  PostWidget,
  Author,
  Comments,
  CommentsForm
} from '../../components';
import styled from 'styled-components';

const PostDetails = ({ post }) => {
  return (
    <PostDetailContainer>
      <div className="wrapper">
        <div className="article">
          <PostDetail post={post} />
          <CommentsForm slug={post.slug} />
          <Comments slug={post.slug} />
        </div>
        <div className="left-bar">
          <PostWidget
            slug={post.slug}
            categories={post.categories.map((category) => category.slug)}
          />
          <Categories />
        </div>
      </div>
    </PostDetailContainer>
  );
};

export const PostDetailContainer = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  .wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .article {
      padding: 20px;
      max-width: 920px;
      background-color: #d9d9d9;
      margin-bottom: 40px;
    }
  }
`;

export default PostDetails;

export async function getStaticProps({ params }) {
  const data = await getPostDetails(params.slug);
  return {
    props: { post: data }
  };
}

export async function getStaticPaths() {
  const posts = await getPosts();

  return {
    paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: false
  };
}
