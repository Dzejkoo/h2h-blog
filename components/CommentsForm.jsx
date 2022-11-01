import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

const CommentsFrom = () => {
  const [error, setError] = useState(false);
  const [localStorage, setLocalStorage] = useState(null);
  const [showSuccesMessage, setShowSuccesMessage] = useState(false);
  const commentEl = useRef();
  const nameEl = useRef();
  const emailEl = useRef();
  const storeDataEl = useRef();

  const handleCommentSubmission = () => {};
  return (
    <CommentsFormWrapper>
      <h3 className="comments__title">Skomentuj</h3>
      <div className="comments__textarea">
        <textarea
          rows="10"
          cols="50"
          ref={commentEl}
          maxLength="200"
          placeholder="Komentarz"
          name="komentarz"></textarea>
      </div>
      <div className="comments__input">
        <input placeholder="name" name="name" type="text" ref={nameEl} />
        <input placeholder="email" name="email" type="text" ref={emailEl} />
      </div>
      {error && <p>Wszystkie pola są wymagane</p>}
      <div className="comments__button">
        <button type="button" onClick={handleCommentSubmission}>
          Wyślij
        </button>
      </div>
    </CommentsFormWrapper>
  );
};

const CommentsFormWrapper = styled.div`
  width: 100%;
  /* box-sizing: border-box; */
  .comments__input {
    width: 100%;
    display: flex;

    input {
      &:first-child {
        margin-right: 10px;
      }
      width: 50%;
      padding: 10px;
    }
  }
  .comments__button {
    button {
      padding: 5px 23px;
      margin-top: 10px;
      margin-bottom: 20px;
    }
  }
  .comments__textarea {
    width: 100%;
    height: 100px;
    margin-bottom: 10px;
    textarea {
      box-sizing: border-box;
      width: 100%;
      height: 100%;
      margin: 0;
      padding: 10px;
      resize: none;
      overflow: auto;
    }
  }
`;
export default CommentsFrom;
