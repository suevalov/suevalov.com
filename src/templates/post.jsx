import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import Image from 'gatsby-image';
import { Location } from '@reach/router';
import Layout from '../components/Layout';
import PostContainer, {
  MetaRow,
  HiddenOnTablet,
} from '../components/PostContainer/PostContainer';
import PostTags from '../components/PostTags/PostTags';
import SocialLinks from '../components/SocialLinks/SocialLinks';
import SEO from '../components/SEO/SEO';
import { FancyH1 } from '../components/FancyHeader/FancyHeader';
import config from '../../config';
import './common/code-highlight.css';
import TableOfContents from '../components/TableOfContent/TableOfContent';
import ScrollToTop from '../components/ScrollToTop/ScrollToTop';

export default class PostTemplate extends React.Component {
  render() {
    const { slug } = this.props.pageContext;
    const postNode = this.props.data.markdownRemark;
    const post = postNode.frontmatter;
    const timeToRead = postNode.timeToRead;
    const excerpt = postNode.excerpt;
    const headings = (postNode.headings || []).filter(
      (heading) => heading.depth === 2
    );
    const hasTableOfContents = headings.length > 2;
    const tableOfContents = postNode.tableOfContents;
    if (!post.id) {
      post.id = slug;
    }
    return (
      <Location>
        {({ location }) => (
          <Layout location={location}>
            <Helmet>
              <title>{`${post.title} | ${config.siteTitle}`}</title>
            </Helmet>
            <SEO
              post={{
                title: post.title,
                description: post.description,
                excerpt,
                cover: post.cover,
                path: slug,
              }}
            />
            <main>
              <FancyH1 style={{ marginBottom: 20, lineHeight: '3.5rem' }}>
                {post.title}
              </FancyH1>
              <PostContainer>
                <MetaRow>
                  <PostTags tags={post.tags} />
                  <div>
                    <time>{post.date}</time>
                    <span />
                    <time>{timeToRead} min read</time>
                  </div>
                </MetaRow>
              </PostContainer>
              <hr />
              <PostContainer>
                {post.cover && (
                  <div
                    style={{
                      marginBottom: 30,
                    }}
                  >
                    <Image fluid={post.cover.childImageSharp.fluid} />
                  </div>
                )}
                <article>
                  {hasTableOfContents && (
                    <TableOfContents tableOfContents={tableOfContents} />
                  )}
                  <div dangerouslySetInnerHTML={{ __html: postNode.html }} />
                </article>
                <SocialLinks
                  path={slug}
                  title={post.title}
                  description={excerpt}
                  cover={post.cover}
                />
                <div style={{ textAlign: 'center' }}>
                  <PostTags tags={post.tags} />
                </div>
              </PostContainer>
            </main>
            <HiddenOnTablet>
              <ScrollToTop />
            </HiddenOnTablet>
          </Layout>
        )}
      </Location>
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
      tableOfContents
      headings {
        value
        depth
      }
      frontmatter {
        title
        date(formatString: "MMMM Do, YYYY")
        cover {
          childImageSharp {
            resize(width: 1000) {
              src
            }
            fluid(maxWidth: 786) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        tags
      }
      fields {
        slug
      }
    }
  }
`;
