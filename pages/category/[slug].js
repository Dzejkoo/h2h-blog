import React, { useState } from 'react';
import { getCategoryPost, getCategories } from '../../services';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { ArrowBack } from '../../assets/images/vectors/ArrowBack';

import { PostCard, Categories, Loader } from '../../components';

const CategoryPost = ({ posts }) => {
  const router = useRouter();
  const [postNum, setPostNum] = useState(3);

  const handleClick = () => {
    setPostNum((prev) => prev + 3);
  };

  if (router.isFallback) {
    return <Loader />;
  }
  return (
    <WrapperPage>
      <CategoriesTitle>
        <span>{posts[0].node.categories.map((category) => category.name)}</span>
      </CategoriesTitle>
      <ContainerPost>
        <div className="post">
          {posts.slice(0, postNum).map((post, index) => (
            <PostCard key={index} post={post.node} />
          ))}
          {postNum >= posts.length ? (
            ''
          ) : (
            <ButtonMore onClick={handleClick}>
              Załaduj więcej <ArrowBack />
            </ButtonMore>
          )}
        </div>
        <div className="post-widget">
          <div className="post-widget__wrapper">
            <Categories />
          </div>
        </div>
      </ContainerPost>
    </WrapperPage>
  );
};

export const ContainerPost = styled.div`
  display: flex;
  @media screen and (max-width: 920px) {
    flex-direction: column;
  }
  width: 100%;
`;

export const CategoriesTitle = styled.div`
  padding: 20px 0;
  span {
    text-transform: uppercase;
    color: ${({ theme }) => theme.primaryColor};
    font-weight: 600;
    font-size: ${({ theme }) => theme.fontSize.h2};
    position: relative;
  }
`;

export const ButtonMore = styled.button`
  color: ${({ theme }) => theme.primaryColor};
  font-size: ${({ theme }) => theme.fontSize.smallText};
  font-weight: 200;
  letter-spacing: 1px;
  background-color: transparent;
  cursor: pointer;
  border: 0;
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  svg {
    animation: bounce 2s infinite;
    width: 25px;
    height: 25px;
    margin-top: 7px;
    path {
      stroke: ${({ theme }) => theme.primaryColor};
    }
  }
  @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-10px);
    }
    60% {
      transform: translateY(-5px);
    }
  }
`;

export const WrapperPage = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  .post {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80%;
    @media screen and (max-width: 920px) {
      width: 100%;
    }
  }
  .post-widget {
    .post-widget__wrapper {
      position: sticky;
      top: 112px;
    }
  }
`;

export default CategoryPost;

export async function getStaticProps({ params }) {
  const posts = await getCategoryPost(params.slug);

  return {
    props: { posts }
  };
}

export async function getStaticPaths() {
  const categories = await getCategories();
  return {
    paths: categories.map(({ slug }) => ({ params: { slug } })),
    fallback: true
  };
}
