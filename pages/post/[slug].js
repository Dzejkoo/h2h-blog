import React from 'react';
import { getPosts, getPostDetails } from '../../services';
import { PostDetail, Categories, PostWidget, Comments, CommentsForm } from '../../components';
import styled from 'styled-components';

const PostDetails = ({ post }) => {
  return (
    <PostDetailContainer>
      <div className="wrapper">
        <WrapperArticle className="article">
          <PostDetail post={post} />
          <div className="">
            <CommentsForm slug={post.slug} />
            <Comments slug={post.slug} />
          </div>
        </WrapperArticle>

        <div className="left-bar">
          <div className="left-bar__wrapper">
            <PostWidget
              slug={post.slug}
              categories={post.categories.map((category) => category.slug)}
            />
            <Categories />
          </div>
        </div>
      </div>
    </PostDetailContainer>
  );
};

export const WrapperArticle = styled.div`
  width: 80%;
  /* max-width: 960px; */
  border-radius: 10px;
  margin-right: 20px;
  overflow: hidden;
  @media screen and (max-width: 920px) {
    margin-right: 0;
    width: auto;
  }

  margin-bottom: 40px;
`;

export const PostDetailContainer = styled.div`
  max-width: 1250px;

  box-sizing: border-box;
  margin: 0 auto;
  .left-bar {
    &__wrapper {
      position: sticky;
      top: 20px;
    }
  }
  .wrapper {
    display: flex;
    flex-direction: row;
    width: 100%;
    box-sizing: border-box;
    @media screen and (max-width: 920px) {
      flex-direction: column;
    }
    justify-content: space-between;
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
