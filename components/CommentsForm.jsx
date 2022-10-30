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
      <div className="">
        <textarea ref={commentEl} placeholder="Komentarz" name="komentarz"></textarea>
      </div>
      <div className="">
        <input placeholder="name" name="name" type="text" ref={nameEl} />
        <input placeholder="email" name="email" type="text" ref={emailEl} />
      </div>
      {error && <p>Wszystkie pola są wymagane</p>}
      <div className="">
        <button type="button" onClick={handleCommentSubmission}>
          Wyślij
        </button>
      </div>
    </CommentsFormWrapper>
  );
};

const CommentsFormWrapper = styled.div``;
export default CommentsFrom;
