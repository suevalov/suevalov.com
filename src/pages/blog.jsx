import React from 'react';
import { graphql } from 'gatsby';
import sortBy from 'lodash/sortBy';

import Helmet from 'react-helmet';
import PostListing from '../components/PostListing/PostListing';
import SEO from '../components/SEO/SEO';
import Layout from '../components/Layout';
import config from '../../config';

const Blog = props => {
  const postEdges = props.data.allMarkdownRemark
    ? props.data.allMarkdownRemark.edges
    : [];
  let posts = [];
  postEdges.forEach(postEdge => {
    posts.push({
      path: postEdge.node.fields.slug,
      title: postEdge.node.frontmatter.title,
      date: postEdge.node.frontmatter.date,
    });
  });
  posts = sortBy(posts, 'date').reverse();
  return (
    <Layout location={props.location}>
      <Helmet title={`Blog - ${config.siteTitle}`} />
      <SEO />
      <PostListing posts={posts} />
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
    allContentfulTag(limit: 1000) {
      edges {
        node {
          title
          slug
        }
      }
    }
    allContentfulTodayILearned(
      limit: 1000
      sort: { fields: [when], order: DESC }
    ) {
      edges {
        node {
          title
          slug
        }
      }
    }
  }
`;

export default Blog;
