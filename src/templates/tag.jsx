import React from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';
import sortBy from 'lodash/sortBy';

import Helmet from 'react-helmet';
import { Location } from '@reach/router';
import Layout from '../components/Layout';
import PostListing from '../components/PostListing/PostListing';
import { FancyH1 } from '../components/FancyHeader/FancyHeader';

import config from '../../config';

function toTitleCase(str) {
  return str.replace(
    /\w\S*/g,
    (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  );
}

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

function getNotes(props, tag) {
  const edges = get(props, 'data.allContentfulTodayILearned.edges', []);
  const notes = edges
    .map((edge) => ({
      path: `/blog/til/${edge.node.slug}`,
      title: edge.node.title,
      date: edge.node.date,
      tags: edge.node.tags.map((item) => item.title),
    }))
    .filter((items) => items.tags.indexOf(tag) !== -1);
  return sortBy(notes, 'date').reverse();
}

export default class TagTemplate extends React.Component {
  render() {
    const tag = this.props.pageContext.tag;
    const posts = getPosts(this.props);
    const notes = getNotes(this.props, tag);
    return (
      <Location>
        {({ location }) => (
          <Layout location={location}>
            <div className="tag-container">
              <Helmet
                title={`Posts tagged as "${tag}" | ${config.siteTitle}`}
              />
              <FancyH1>About {toTitleCase(tag)}</FancyH1>
              <PostListing posts={posts} notes={notes} />
            </div>
          </Layout>
        )}
      </Location>
    );
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query TagPage($tag: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: { draft: { ne: true }, tags: { in: [$tag] } }
        fileAbsolutePath: { glob: "**/content/blog/**/*.md" }
      }
    ) {
      edges {
        node {
          fields {
            slug
          }
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
          tags {
            title
          }
        }
      }
    }
  }
`;
