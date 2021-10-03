import React from 'react';
import { graphql } from 'gatsby';
import AsPost from './common/as-post';

export default class Post extends React.Component {
  render() {
    const { slug } = this.props.pageContext;
    const path = `/blog/${slug}`;
    const node = this.props.data.contentfulPost;

    const title = node.title;
    const date = node.date;
    const tags = node.tags.map((item) => item.title);
    const timeToRead = node.body.childMarkdownRemark.timeToRead;
    const excerpt = node.body.childMarkdownRemark.excerpt;
    const html = node.body.childMarkdownRemark.html;

    return (
      <AsPost
        {...{
          title,
          excerpt,
          path,
          tags,
          date,
          timeToRead,
          html,
        }}
      />
    );
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query PostBySlug($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      title
      id
      slug
      date(formatString: "MMMM Do, YYYY")
      tags {
        title
      }
      body {
        childMarkdownRemark {
          timeToRead
          excerpt
          html
        }
      }
    }
  }
`;
