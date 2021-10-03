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
  const edges = get(props, 'data.allContentfulPost.edges', []);
  const notes = [];
  edges.forEach((edge) => {
    notes.push({
      path: `/blog/${edge.node.slug}`,
      title: edge.node.title,
      date: edge.node.date,
    });
  });
  return sortBy(notes, 'date').reverse();
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
    allContentfulPost(sort: { fields: [date], order: ASC }) {
      edges {
        node {
          title
          slug
        }
      }
    }
    allContentfulTodayILearned(sort: { fields: [date], order: ASC }) {
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
