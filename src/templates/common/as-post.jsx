import React from 'react';
import Helmet from 'react-helmet';
import { Location } from '@reach/router';
import Layout from '../../components/Layout';
import PostTags from '../../components/PostTags/PostTags';
import { FancyH1 } from '../../components/FancyHeader/FancyHeader';
import SocialLinks from '../../components/SocialLinks/SocialLinks';
import SEO from '../../components/SEO/SEO';
import PostContainer, {
  MetaRow,
  HiddenOnTablet,
} from '../../components/PostContainer/PostContainer';
import config from '../../../config';

import './code-highlight.css';
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';

export default function AsPost({
  title,
  excerpt,
  path,
  tags,
  date,
  timeToRead,
  html,
}) {
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
