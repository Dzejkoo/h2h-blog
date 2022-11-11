import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Author from './Author';
import Image from 'next/image';

const PostDetail = ({ post }) => {
  const {
    featuredImage: { url },
    title,
    slug,
    content: {
      raw: { children }
    }
  } = post;

  const getContentFragment = (index, text, obj) => {
    let modifiedText = text;
    let modifiedTextLink = obj.type === 'link' ? obj.children : null;

    if (obj) {
      if (obj.bold) {
        modifiedText = <b key={index}>{text}</b>;
      }

      if (obj.italic) {
        modifiedText = <em key={index}>{text}</em>;
      }

      if (obj.underline) {
        modifiedText = <u key={index}>{text}</u>;
      }
    }

    switch (obj.type) {
      case 'link':
        return (
          <PostDetailLink href={obj.href}>
            {modifiedTextLink.map((item, i) => (
              <React.Fragment key={i}>{item.text}</React.Fragment>
            ))}
          </PostDetailLink>
        );
      case 'heading-two':
        return (
          <HeadingTwo key={index}>
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </HeadingTwo>
        );
      case 'paragraph':
        return (
          <Paragraph key={index}>
            {modifiedText.map((item, i) => {
              return <React.Fragment key={i}>{item}</React.Fragment>;
            })}
          </Paragraph>
        );
      case 'heading-one':
        return (
          <HeadingOne key={index}>
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </HeadingOne>
        );
      case 'image':
        return <DescImg key={index} alt={obj.title} src={obj.src} />;
      default:
        return modifiedText;
    }
  };
  return (
    <PostDetailWrapper>
      <div className="wrapper-image">
        <Image layout="fill" objectFit="cover" src={url} alt={title} className="post-image" />
      </div>
      <PostDetailTitle className="card-detail__title">
        <Link href={`/post/${slug}`}>{title}</Link>
      </PostDetailTitle>
      <Author post={post} />
      <div className="desc">
        {children.map((typeObj, index) => {
          const children = typeObj.children.map((item, itemIndex) =>
            getContentFragment(itemIndex, item.text, item)
          );

          return getContentFragment(index, children, typeObj);
        })}
      </div>
    </PostDetailWrapper>
  );
};

export const PostDetailTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.h1};
  a {
    color: ${({ theme }) => theme.text};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const PostDetailLink = styled.a`
  color: ${({ theme }) => theme.link};
`;
export const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.fontSize.reguralText};
  font-weight: 300;
  line-height: 130%;
`;
export const HeadingOne = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.h1};
`;
export const HeadingTwo = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.h2};
`;
export const DescImg = styled.img`
  max-width: 100%;
  margin: 0 auto;
  display: block;
`;

export const PostDetailWrapper = styled.div`
  background-color: ${({ theme }) => theme.blockBgc};
  border-radius: 10px;
  padding: 20px;
  max-width: 920px;
  @media screen and (max-width: 920px) {
    padding: 10px;
  }
  .desc {
    margin-top: 20px;
  }

  .wrapper-image {
    border-radius: 10px;
    width: 100%;
    aspect-ratio: auto 2 / 1;
    position: relative;
    img {
      border-radius: 10px;
      width: 100%;
    }
  }
`;

export default PostDetail;
