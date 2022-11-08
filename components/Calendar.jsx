import React from 'react';
import moment from 'moment/moment';
import styled from 'styled-components';

const Calendar = ({ createdAt }) => {
  return (
    <CalendarWrapper>
      <svg
        width="26"
        height="24"
        viewBox="0 0 26 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <rect
          x="4.38776"
          y="5"
          width="16.5452"
          height="16"
          rx="2"
          stroke="black"
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16.7967 3V7"
          stroke="black"
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.52412 3V7"
          stroke="black"
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4.38776 11H20.933"
          stroke="black"
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect
          x="8.52411"
          y="15"
          width="2.06816"
          height="2"
          stroke="black"
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span>{moment(createdAt).format('MMM DD, YYYY')}</span>
    </CalendarWrapper>
  );
};

export const CalendarWrapper = styled.div`
  display: flex;
  align-items: center;
  span {
    font-size: ${({ theme }) => theme.fontSize.smallText};
    font-weight: 300;
  }
`;

export default Calendar;
