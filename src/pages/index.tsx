import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import { Query } from '../graphql-types';
import styled from 'styled-components';
import PostItem, { Post, PostList } from 'src/components/Post';
import Layout from 'src/components/Layout';
import Seo from 'src/components/Seo';
import PostCategory from 'src/components/PostCategory';

const LatestPostListQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: frontmatter___last_modified_at, order: DESC }
    ) {
      edges {
        node {
          excerpt(pruneLength: 200, truncate: true)
          frontmatter {
            title
            last_modified_at(formatString: "YYYY-MM-DD")
            categories
            path
          }
          id
        }
      }
    }
  }
`;

const IndexPage = () => {
  const data = useStaticQuery<Query>(LatestPostListQuery);

  return (
    <Layout>
      <Seo title="Home" />
      <PostCategory />
      <PostList>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <PostItem key={node.id} post={node} />
        ))}
      </PostList>
    </Layout>
  );
};

export default IndexPage;
