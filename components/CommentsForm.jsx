import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { submitComment } from '../services';

const CommentsFrom = ({ slug }) => {
  const [error, setError] = useState(false);
  const [localStorage, setLocalStorage] = useState(null);
  const [showSuccesMessage, setShowSuccesMessage] = useState(false);
  const commentEl = useRef();
  const nameEl = useRef();
  const emailEl = useRef();
  const storeDataEl = useRef();

  useEffect(() => {
    nameEl.current.value = window.localStorage.getItem('name');
    emailEl.current.value = window.localStorage.getItem('email');
  }, []);

  const handleCommentSubmission = () => {
    setError(false);

    const { value: comment } = commentEl.current;
    const { value: name } = nameEl.current;
    const { value: email } = emailEl.current;
    const { checked: storeData } = storeDataEl.current;

    if (!comment || !name || !email) {
      setError(true);
      return;
    }

    const commentObj = {
      name,
      email,
      comment,
      slug
    };

    if (storeData) {
      window.localStorage.setItem('name', name);
      window.localStorage.setItem('email', email);
    } else {
      window.localStorage.removeItem('name', name);
      window.localStorage.removeItem('name', name);
    }

    submitComment(commentObj).then((res) => {
      setShowSuccesMessage(true);
      setTimeout(() => {
        setShowSuccesMessage(false);
      }, 3000);
    });
  };
  return (
    <CommentsFormWrapper>
      <h3>
        <span>Skomentuj</span>
      </h3>
      <div className="comments__textarea">
        <textarea
          rows="10"
          cols="50"
          ref={commentEl}
          maxLength="200"
          placeholder="Komentarz"
          name="komentarz"
          required></textarea>
      </div>
      <div className="comments__input">
        <input placeholder="name" name="name" type="text" ref={nameEl} />
        <input placeholder="email" name="email" type="text" ref={emailEl} />
      </div>
      <div className="comment__checkbox">
        <div className="comments__checkbox-wrapper">
          <input type="checkbox" ref={storeDataEl} id="storeData" name="sotreData" value="true" />
          <label htmlFor="storeData">Zapmiętaj</label>
        </div>
      </div>
      {error && <Error>Wszystkie pola są wymagane</Error>}
      <div className="comments__button">
        <button type="button" onClick={handleCommentSubmission}>
          Wyślij
        </button>
      </div>
      {showSuccesMessage && (
        <Succes showSuccesMessage={showSuccesMessage}>Komentarz został dodany</Succes>
      )}
    </CommentsFormWrapper>
  );
};

export const Succes = styled.span`
  padding: 15px;
  font-size: ${({ theme }) => theme.fontSize.smallText};
  font-weight: 300;
  border-radius: 5px;
  color: white;
  margin-top: 20px;
  background-color: #38b000;
`;

const CommentsFormWrapper = styled.div`
  width: 100%;
  padding: 20px;
  background-color: ${({ theme }) => theme.blockBgc};
  margin-top: 30px;
  border-radius: 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

  h3 {
    margin-top: 10px;
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
    span {
      display: block;
      line-height: 100%;
      padding-bottom: 20px;
      z-index: 1;
      text-transform: uppercase;
      border-bottom: 1px solid ${({ theme }) => theme.text};
      font-size: ${({ theme }) => theme.fontSize.smallText};
      letter-spacing: 1px;
    }
  }

  .comments__input {
    width: 100%;
    display: flex;

    input {
      border: 0;
      &:first-child {
        margin-right: 10px;
      }
      width: 50%;
      padding: 15px;
      font-family: 'Lato', sans-serif;
      border-radius: 5px;
    }
  }
  .comments__button {
    button {
      padding: 9px 23px;
      margin-top: 15px;
      margin-bottom: 10px;
      background-color: ${({ theme }) => theme.colorRegural.primaryColor};
      border: 0;
      color: white;
      text-transform: uppercase;
      border-radius: 5px;
      cursor: pointer;
      font-size: ${({ theme }) => theme.fontSize.smallestTex};
    }
    button:hover {
      background-color: ${({ theme }) => theme.colorRegural.primaryColorLight};
    }
  }
  .comment__checkbox {
    padding: 20px 0 10px 0;
    font-size: ${({ theme }) => theme.fontSize.smallText};
    font-weight: 300;
    .comments__checkbox-wrapper {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      input {
        margin: 0;
        padding: 5px;
        width: 15px;
        height: 15px;
      }
    }
    label {
      margin-left: 10px;
    }
  }
  .comments__textarea {
    width: 100%;
    height: 100px;
    margin-bottom: 10px;
    textarea {
      box-sizing: border-box;
      width: 100%;
      border: 0;
      border-radius: 5px;
      font-family: 'Lato', sans-serif;
      height: 100%;
      margin: 0;
      padding: 15px;
      resize: none;
      overflow: auto;
    }
  }
`;

export const Error = styled.p`
  padding: 15px;
  font-size: ${({ theme }) => theme.fontSize.smallText};
  font-weight: 300;
  border-radius: 5px;
  color: white;
  background-color: #dc2f02;
`;
export default CommentsFrom;
