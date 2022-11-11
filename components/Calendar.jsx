import React from 'react';
import moment from 'moment/moment';
import styled from 'styled-components';

const Calendar = ({ createdAt }) => {
  return (
    <CalendarWrapper>
      <svg
        width="15"
        height="15"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <rect
          x="4"
          y="5"
          width="16"
          height="16"
          rx="2"
          stroke=""
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 3V7"
          stroke=""
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M8 3V7" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path
          d="M4 11H20"
          stroke=""
          strokeWidth="1.5"
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
  color: ${({ theme }) => theme.primaryColor};
  svg {
    margin-right: 5px;
    stroke: ${({ theme }) => theme.primaryColor};
  }
  span {
    font-size: ${({ theme }) => theme.fontSize.smallestText};
    font-weight: 500;
  }
`;

export default Calendar;
