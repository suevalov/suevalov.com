import React from 'react';
import get from 'lodash/get';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Link from 'gatsby-link';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { TABLET_MEDIA_QUERY } from 'typography-breakpoint-constants';
import LeadText from '../components/LeadText/LeadText';
import Layout from '../components/Layout';
import LeadContacts from '../components/LeadContacts/LeadContacts';
import Config from '../../config';
import Talk from '../components/Talk';
import allTalks from '../../content/talks.json';

const Row = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: ${(props) => props.justifyContent};
  margin-bottom: 20px;

  ${TABLET_MEDIA_QUERY} {
    flex-direction: column;
  }
`;

const TalksList = styled('div')`
  font-size: 0.9em;

  min-width: 50%;
  margin-top: 40px;

  h3 {
    margin-top: 0;
    margin-bottom: 20px;

    a {
      margin-left: 10px;
      font-size: 0.6em;
      vertical-align: middle;
      font-family: 'Open Sans', 'Helvetica Neue', serif;
    }
  }

  ul {
    list-style: none;
    margin: 0;
  }

  ul li {
    display: block;
  }

  li:last-child {
    margin: 0;
  }
`;

const classes = {
  leadContacts: css`
    min-width: 250px;

    ${TABLET_MEDIA_QUERY} {
      width: 100%;
    }
  `,
  leadText: css`
    flex-grow: 0;
    margin-right: 60px;

    ${TABLET_MEDIA_QUERY} {
      margin-right: 0;
      margin-bottom: 20px;
    }
  `,
};

class Index extends React.Component {
  render() {
    const talks = allTalks.slice(0, 3);

    const edges = get(this.props, 'data.allContentfulPost.edges', []);
    const posts = edges.map((edge) => ({
      path: `/blog/${edge.node.slug}`,
      title: edge.node.title,
    }));

    return (
      <Layout location={this.props.location}>
        <Helmet title={Config.siteTitle} />
        <Row justifyContent="space-between" style={{ marginBottom: 0 }}>
          <LeadText techs={Config.techInterestedIn} css={classes.leadText} />
          <LeadContacts links={Config.userLinks} css={classes.leadContacts} />
        </Row>
        <Row justifyContent="flex-start">
          <TalksList>
            <h3>
              Recent posts
              <Link to="/blog">see all</Link>
            </h3>
            <ul>
              {posts.map((post) => (
                <li key={post.path}>
                  <Link to={post.path}>{post.title}</Link>
                </li>
              ))}
            </ul>
          </TalksList>
          <TalksList>
            <h3>
              Recent talks
              <Link to="/talks">see all</Link>
            </h3>
            <ul>
              {talks.map((talk) => (
                <li key={talk.title}>
                  <Talk talk={talk} />
                </li>
              ))}
            </ul>
          </TalksList>
        </Row>
      </Layout>
    );
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query IndexQuery {
    allContentfulPost(limit: 5, sort: { fields: [date], order: DESC }) {
      edges {
        node {
          title
          slug
          date
        }
      }
    }
  }
`;

export default Index;
