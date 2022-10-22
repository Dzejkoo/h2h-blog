import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { getCategories } from '../services';

const Header = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);
  return (
    <WrapperHeader>
      <div className="container">
        <div className="logo">
          <Link href="/">
            <span>h2h</span>
          </Link>
        </div>
        <div className="categories">
          {categories.map((category) => (
            <Link key={category.slug} href={`/category/${category.slug}`}>
              <span>{category.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </WrapperHeader>
  );
};

export default Header;

export const WrapperHeader = styled.div`
  margin: 0 auto;
  max-width: 1300px;
  border-bottom: 1px solid black;
  margin-bottom: 30px;
  .container {
    display: flex;
    justify-content: space-between;
    .logo {
      font-size: 28px;
      padding: 20px 10px;
      cursor: pointer;
    }
    .categories {
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      span {
        padding: 10px 20px;
      }
    }
  }
`;
