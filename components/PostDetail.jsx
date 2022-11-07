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
          <a href={obj.href}>
            {modifiedTextLink.map((item, i) => (
              <React.Fragment key={i}>{item.text}</React.Fragment>
            ))}
          </a>
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
      <h1>
        <Link href={`/post/${slug}`}>{title}</Link>
      </h1>
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

export const Paragraph = styled.p``;
export const HeadingOne = styled.h1``;
export const HeadingTwo = styled.h2``;
export const DescImg = styled.img`
  max-width: 100%;
  margin: 0 auto;
  display: block;
`;

export const PostDetailWrapper = styled.div`
  .wrapper-image {
    width: 100%;
    aspect-ratio: auto 2 / 1;
    position: relative;
    img {
      width: 100%;
    }
  }
`;

export default PostDetail;
