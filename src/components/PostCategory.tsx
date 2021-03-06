import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import * as R from 'remeda';
import styled from 'styled-components';

import PostCategoryItem from './PostCategoryItem';

const List = styled.nav`
  li {
    list-style-type: none;
    display: inline-block;
    padding-right: 12px;
  }
  display: block;
  padding-top: 10px;
`;

interface ICategoryCount {
  category: string;
  count: number;
}

const sortByCountDesc = (
  { count: aCount }: ICategoryCount,
  { count: bCount }: ICategoryCount
): number => {
  return bCount - aCount;
};

const renderCategoryItem = (categories: ICategoryCount[]) =>
  R.pipe(
    categories,
    R.sort(sortByCountDesc),
    R.map(({ count, category }) => (
      <PostCategoryItem
        key={category}
        name={category}
        count={count}
        link={`/category/${category}`}
      />
    ))
  );

const PostCategory: React.FC = () => {
  const {
    allMarkdownRemark: { totalCount, categories },
  } = useStaticQuery(graphql`
    {
      allMarkdownRemark {
        totalCount
        categories: group(field: frontmatter___categories) {
          category: fieldValue
          count: totalCount
        }
      }
    }
  `);

  return (
    <>
      <p>Categories</p>
      <List>
        <ul>
          <PostCategoryItem name="All" count={totalCount} link="/" />
          {renderCategoryItem(categories)}
        </ul>
      </List>
    </>
  );
};

export default PostCategory;
