import React from "react";
import Helmet from "react-helmet";
import styled from "react-emotion";
import { DEFAULT_MEDIA_QUERY } from "typography-breakpoint-constants";
import PostTags from "../components/PostTags/PostTags";
import SocialLinks from "../components/SocialLinks/SocialLinks";
import SEO from "../components/SEO/SEO";
import { FancyH1 } from "../components/FancyHeader/FancyHeader";
import config from "../../config";
import "./code-highlight.css";
import "./post.css";

const PostContainer = styled("div")`
  max-width: 660px;
  margin: 0 auto;

  .breakout {
    margin-left: -100px;
    margin-right: -100px;
  }

  ul {
    margin-left: 0;
    padding: 0;
    list-style: none;
    padding-left: 20px;
    list-style-image: url(/images/bullet.svg);

    li {
      padding-left: 10px;
    }
  }

  ol {
    margin-left: 0;
    padding: 0;
    list-style-type: none;

    li {
      position: relative;
      counter-increment: step-counter;
      margin-bottom: 10px;
      padding-left: 5px;
      margin-left: 25px;

      &:before {
        position: absolute;
        left: -25px;
        top: 5px;
        content: counter(step-counter);
        margin-right: 5px;
        font-size: 0.8em;
        background-color: rgba(137, 188, 254, 0.8);
        color: white;
        font-weight: bold;
        height: 20px;
        text-align: center;
        line-height: 20px;
        width: 20px;
        border-radius: 3px;
      }
    }
  }

  h2 {
    position: relative;
    display: inline-block;

    :before {
      content: "";
      width: 90%;
      height: 15px;
      position: absolute;
      left: -10px;
      bottom: -5px;
      background-color: #89bcfe;
      opacity: 0.6;
      z-index: -2;
    }
  }

  figure {
    figcaption {
      text-align: center;
      font-size: 0.9em;
      font-style: italic;
      color: #666;
      padding: 0.75em 2em 0.75em 0;
    }
  }

  blockquote {
    margin-left: 0;
  }

  ${DEFAULT_MEDIA_QUERY} {
    .breakout {
      margin-left: 0;
      margin-right: 0;
    }
  }

  @media only screen and (max-width: 700px) {
    margin: 0 10px;
  }
`;

export default class PostTemplate extends React.Component {
  render() {
    const { slug } = this.props.pathContext;
    const postNode = this.props.data.markdownRemark;
    const post = postNode.frontmatter;
    if (!post.id) {
      post.id = slug;
    }
    return (
      <React.Fragment>
        <Helmet>
          <title>{`${post.title} | ${config.siteTitle}`}</title>
        </Helmet>
        <SEO postPath={slug} postNode={postNode} postSEO />
        <main>
          <FancyH1>{post.title}</FancyH1>
          <PostTags tags={post.tags} />
          <PostContainer>
            <article dangerouslySetInnerHTML={{ __html: postNode.html }} />
          </PostContainer>
        </main>
        <div className="post-meta">
          <SocialLinks postPath={slug} postNode={postNode} />
        </div>
      </React.Fragment>
    );
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      headings {
        depth
        value
      }
      frontmatter {
        title
        cover
        date
        tags
      }
      fields {
        slug
      }
    }
  }
`;
