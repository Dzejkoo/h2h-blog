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

  console.log(categories);

  return (
    <WrapperCategories>
      <h2>Kategorie</h2>
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
  .league-wrapper {
    display: flex;
    flex-direction: row;
    .league {
      margin-right: 20px;
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
