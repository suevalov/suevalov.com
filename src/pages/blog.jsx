import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import PostListing from '../components/PostListing/PostListing';
import SEO from '../components/SEO/SEO';
import Layout from '../components/Layout';
import config from '../../config';

const Blog = props => {
  const postEdges = props.data.allMarkdownRemark
    ? props.data.allMarkdownRemark.edges
    : [];
  return (
    <Layout location={props.location}>
      <Helmet title={config.siteTitle} />
      <SEO postEdges={postEdges} />
      <PostListing postEdges={postEdges} />
    </Layout>
  );
};

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query BlogQuery {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: { draft: { ne: true } }
        fileAbsolutePath: { glob: "**/content/blog/**/*.md" }
      }
    ) {
      edges {
        node {
          fields {
            slug
          }
          excerpt
          timeToRead
          frontmatter {
            title
            date
          }
        }
      }
    }
  }
`;

export default Blog;
