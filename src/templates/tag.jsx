import React from 'react';
import { graphql } from 'gatsby';
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
    txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  );
}

export default class TagTemplate extends React.Component {
  render() {
    const tag = this.props.pageContext.tag;
    const postEdges = this.props.data.allMarkdownRemark
      ? this.props.data.allMarkdownRemark.edges
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
      <Location>
        {({ location }) => (
          <Layout location={location}>
            <div className="tag-container">
              <Helmet
                title={`Posts tagged as "${tag}" | ${config.siteTitle}`}
              />
              <FancyH1>About {toTitleCase(tag)}</FancyH1>
              <PostListing posts={posts} />
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
      totalCount
      edges {
        node {
          fields {
            slug
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            date
          }
        }
      }
    }
  }
`;
