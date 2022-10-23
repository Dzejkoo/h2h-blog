import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Author from './Author';

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

    console.log(obj.href);
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
      case 'heading-three':
        return (
          <HeadingThree key={index}>
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </HeadingThree>
        );
      case 'image':
        return (
          <DescImg
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        );
      default:
        return modifiedText;
    }
  };
  return (
    <PostDetailWrapper>
      {' '}
      <div className="wrapper-image">
        <img src={url} alt={title} className="post-image" />
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
export const HeadingThree = styled.h3``;
export const HeadingTwo = styled.h2``;
export const DescImg = styled.img``;

export const PostDetailWrapper = styled.div`
  .wrapper-image {
    width: 100%;
    img {
      width: 100%;
    }
  }
`;

export default PostDetail;
