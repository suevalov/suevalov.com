import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import { Location } from '@reach/router';
import Layout from '../components/Layout';
import PostTags from '../components/PostTags/PostTags';
import { FancyH1 } from '../components/FancyHeader/FancyHeader';
import SocialLinks from '../components/SocialLinks/SocialLinks';
import SEO from '../components/SEO/SEO';
import PostContainer, {
  MetaRow,
  HiddenOnTablet,
} from '../components/PostContainer/PostContainer';
import config from '../../config';
import './code-highlight.css';
import ScrollToTop from '../components/ScrollToTop/ScrollToTop';

export default class NoteTemplate extends React.Component {
  render() {
    const { slug } = this.props.pageContext;
    const path = `/blog/til/${slug}`;
    const node = this.props.data.contentfulTodayILearned;

    const title = node.title;
    const date = node.date;
    const tags = node.tags.map(item => item.title);
    const timeToRead = node.body.childMarkdownRemark.timeToRead;
    const excerpt = node.body.childMarkdownRemark.excerpt;
    const html = node.body.childMarkdownRemark.html;

    return (
      <Location>
        {({ location }) => (
          <Layout location={location}>
            <Helmet>
              <title>{`${title} | ${config.siteTitle}`}</title>
            </Helmet>
            <SEO
              post={{
                title,
                excerpt,
                path,
              }}
            />
            <main>
              <FancyH1 style={{ marginBottom: 20, lineHeight: '3.5rem' }}>
                {title}
              </FancyH1>
              <PostContainer>
                <MetaRow>
                  <PostTags tags={tags} />
                  <div>
                    <time>{date}</time>
                    <span />
                    <time>{timeToRead} min read</time>
                  </div>
                </MetaRow>
              </PostContainer>
              <hr />
              <PostContainer>
                <article>
                  <div dangerouslySetInnerHTML={{ __html: html }} />
                </article>
                <SocialLinks path={path} title={title} description={excerpt} />
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
  query NoteBySlug($slug: String!) {
    contentfulTodayILearned(slug: { eq: $slug }) {
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
