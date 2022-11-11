import React, { useState, useEffect } from 'react';
import moment from 'moment/moment';
import parse from 'html-react-parser';
import { getComments } from '../services';
import styled from 'styled-components';

const Comments = ({ slug }) => {
  const [error, setError] = useState(false);
  const [comments, setComments] = useState([]);
  useEffect(() => {
    getComments(slug).then((result) => setComments(result));
  }, []);
  return (
    <>
      {comments.length > 0 && (
        <WrapperComment>
          <h3>
            {comments.length}
            {''}
            Komentarze
          </h3>
          {comments.map((comment, index) => (
            <div className="comment" key={index}>
              <p>
                <span className="comment__name">{comment.name}</span>
                {''}
                {moment(comment.createdAt).format('MM DD, YYYY')}
              </p>
              <p className="commnet__text">{parse(comment.comment)}</p>
            </div>
          ))}
        </WrapperComment>
      )}
    </>
  );
};

export const WrapperComment = styled.div``;

export default Comments;
