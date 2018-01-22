import React from "react";
import Helmet from "react-helmet";
import PostListing from "../../components/PostListing/PostListing";
import SEO from "../../components/SEO/SEO";
import config from "../../../config";
import PageContainer from "../../components/PageContainer/PageContainer";

class Blog extends React.Component {
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <PageContainer>
        <Helmet title={config.siteTitle} />
        <SEO postEdges={postEdges} />
        <PostListing postEdges={postEdges} />
      </PageContainer>
    );
  }
}

export default Blog;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
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
            tags
            cover
            date
          }
        }
      }
    }
  }
`;