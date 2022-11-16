import React, { useState, useEffect } from 'react';
import moment from 'moment/moment';
import parse from 'html-react-parser';
import { getComments } from '../services';
import styled from 'styled-components';

const Comments = ({ slug }) => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    getComments(slug).then((result) => setComments(result));
  }, [slug]);
  return (
    <>
      {comments.length > 0 && (
        <WrapperComment>
          <div className="comments__wrapper">
            <h3 className="title">Komentarze</h3>{' '}
            <div className="comments__count">
              <span className="count">
                liczba komentarzy: <strong>{comments.length}</strong>
              </span>
            </div>
          </div>
          {comments.map((comment, index) => (
            <Comment key={index}>
              <p className="comment__bar">
                <span className="comment__name">{comment.name}</span>
                {''}
                <span className="comment__date">
                  {moment(comment.createdAt).format('DD.MM.YYYY')}
                </span>
              </p>
              <p className="commnet__text">{parse(comment.comment)}</p>
            </Comment>
          ))}
        </WrapperComment>
      )}
    </>
  );
};

export const Comment = styled.div`
  margin-bottom: 20px;
  border-bottom: 1px solid ${({ theme }) => theme.border};
  &:last-child {
    border-bottom: none;
    margin-bottom: 0px;
  }
  .comment__bar {
    font-size: ${({ theme }) => theme.fontSize.smallText};

    .comment__date {
      padding-left: 20px;
      color: ${({ theme }) => theme.colorRegural.lightGrey};
    }
    .comment__name {
      padding-right: 20px;
      position: relative;
      color: ${({ theme }) => theme.colorRegural.lightGrey};
      &::after {
        content: '';
        position: absolute;
        right: 0;
        top: 0;
        height: 100%;
        width: 1px;
        background-color: ${({ theme }) => theme.border};
      }
    }
  }
  .commnet__text {
    font-size: ${({ theme }) => theme.fontSize.reguralText};
    color: ${({ theme }) => theme.text};
  }
`;

export const WrapperComment = styled.div`
  background-color: ${({ theme }) => theme.blockBgc};
  padding: 20px;
  /* box-sizing: border-box; */
  max-width: 920px;
  margin-top: 30px;
  border-radius: 10px;
  .comments__wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
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
    .comments__count {
    }
    .count {
      font-size: 11px;
      color: ${({ theme }) => theme.text};
      margin-top: 10px;
      strong {
        font-size: 13px;
      }
      display: block;
      text-transform: uppercase;
    }
    .commenet {
      p {
        .comment__name {
          padding-left: 10px;
        }
      }
    }
    .title {
      display: block;
      line-height: 100%;
      padding-bottom: 20px;
      z-index: 1;
      margin-right: auto;
      margin-top: 10px;
      margin-bottom: 0;
      text-transform: uppercase;
      border-bottom: 1px solid ${({ theme }) => theme.text};
      font-size: ${({ theme }) => theme.fontSize.smallText};
      letter-spacing: 1px;
    }
  }
`;

export default Comments;
