import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { getCategories } from '../services';
import styled from 'styled-components';
import { ThirdLeague } from '../assets/images/vectors/ThirdLeague';
import { FourLeague } from '../assets/images/vectors/FourLegue';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);

  return (
    <WrapperCategories>
      <h2>
        <span>Kategorie</span>
      </h2>
      <div className="league-wrapper">
        {categories.map((category) => {
          return (
            <Link key={category.slug} href={`/category/${category.slug}`}>
              <div className="league">
                {category.name === '4 Liga Wlkp' ? <FourLeague /> : <ThirdLeague />}
                <p>{category.name}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </WrapperCategories>
  );
};

export const WrapperCategories = styled.div`
  max-width: 260px;
  h2 {
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
  .league-wrapper {
    display: flex;
    flex-direction: row;

    .league {
      margin-right: 20px;
      display: flex;
      cursor: pointer;
      p {
        text-align: center;
        margin-top: 10px;
      }
    }
    svg {
      width: 50px;
      height: 50px;
    }
  }
`;

export default Categories;
