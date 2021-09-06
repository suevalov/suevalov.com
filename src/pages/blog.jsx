import React from 'react';
import { graphql } from 'gatsby';
import sortBy from 'lodash/sortBy';
import get from 'lodash/get';
import Helmet from 'react-helmet';
import PostListing from '../components/PostListing/PostListing';
import SEO from '../components/SEO/SEO';
import Layout from '../components/Layout';
import config from '../../config';

function getPosts(props) {
  const edges = get(props, 'data.allMarkdownRemark.edges', []);
  const posts = [];
  edges.forEach((postEdge) => {
    posts.push({
      path: postEdge.node.fields.slug,
      title: postEdge.node.frontmatter.title,
      date: postEdge.node.frontmatter.date,
    });
  });
  return sortBy(posts, 'date').reverse();
}

function getNotes(props) {
  const edges = get(props, 'data.allContentfulTodayILearned.edges', []);
  const notes = [];
  edges.forEach((edge) => {
    notes.push({
      path: `/blog/til/${edge.node.slug}`,
      title: edge.node.title,
      date: edge.node.date,
    });
  });
  return sortBy(notes, 'date').reverse();
}

const Blog = (props) => {
  const posts = getPosts(props);
  const notes = getNotes(props);

  return (
    <Layout location={props.location}>
      <Helmet title={`Blog - ${config.siteTitle}`} />
      <SEO />
      <PostListing posts={posts} notes={notes} />
    </Layout>
  );
};

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query BlogQuery {
    allMarkdownRemark(
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
    allContentfulTodayILearned(sort: { fields: [date], order: DESC }) {
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
