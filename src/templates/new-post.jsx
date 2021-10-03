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
    const heroImage = node.heroImage;
    const hasTableOfContents = node.hasTableOfContents || false;
    const tags = node.tags.map((item) => item.title);
    const timeToRead = node.body.childMarkdownRemark.timeToRead;
    const excerpt = node.body.childMarkdownRemark.excerpt;
    const html = node.body.childMarkdownRemark.html;
    const tableOfContents = node.body.childMarkdownRemark.tableOfContents;

    return (
      <AsPost
        {...{
          title,
          excerpt,
          heroImage,
          path,
          tags,
          date,
          timeToRead,
          html,
          tableOfContents,
          hasTableOfContents,
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
      hasTableOfContents
      date(formatString: "MMMM Do, YYYY")
      tags {
        title
      }
      heroImage {
        title
        fluid(maxWidth: 786) {
          ...GatsbyContentfulFluid
        }
      }
      body {
        childMarkdownRemark {
          tableOfContents
          timeToRead
          excerpt
          html
        }
      }
    }
  }
`;
