import React from "react";
import Helmet from "react-helmet";
import PostListing from "../components/PostListing/PostListing";
import SEO from "../components/SEO/SEO";
import config from "../../config";
import { FancyH1 } from "../components/FancyHeader/FancyHeader";

const Blog = props => {
  const postEdges = props.data.allMarkdownRemark
    ? props.data.allMarkdownRemark.edges
    : [];
  return (
    <div>
      <Helmet title={config.siteTitle} />
      <SEO postEdges={postEdges} />
      <FancyH1>Blog</FancyH1>
      <PostListing postEdges={postEdges} />
    </div>
  );
};

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query BlogQuery {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { draft: { ne: true } } }
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
